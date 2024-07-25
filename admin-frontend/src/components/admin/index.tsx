import { useEffect, useState } from "react";
import { Button, Heading, useControllableState, Text } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Population } from "./quiz-performance/population";
import { Individual } from "./quiz-performance/individual";
import { Participants } from "./quiz-performance/participants";
import { getQuizQuizGet, GetQuizQuizGetResponse, QuizEntry, getAdminQuizEntryAdminQuizEntryGet } from "../../client";

enum ActivePage {
  Individual = "Individual",
  Participants = "Participants",
  Population = "Population",
}

export const Admin = () => {
  const [activePage, setActivePage] = useControllableState({ defaultValue: ActivePage.Population });
  const [quizEntryId, setQuizEntryId] = useControllableState({ defaultValue: "" });
  const [quiz, setQuiz] = useState<GetQuizQuizGetResponse | null>(null);
  const [entry, setEntry] = useState<QuizEntry | null>(null);
  useEffect(() => {
    const getData = async () => {
      setQuiz(await getQuizQuizGet());
    };
    getData().catch(console.error);
  }, []);
  let page = null;
  if (activePage === ActivePage.Population) {
    page = <Population quiz={quiz} />;
  } else if (activePage === ActivePage.Individual) {
    page = <Individual quiz={quiz} entry={entry} />;
  } else if (activePage === ActivePage.Participants) {
    page = <Participants onSetQuizEntryId={(quizEntryId: string) => {
      setActivePage(ActivePage.Individual);
      setQuizEntryId(quizEntryId);
      getAdminQuizEntryAdminQuizEntryGet(/* quizEntryId */).then(setEntry).catch(console.error);
    }} />
  }
  return <Container maxW="2x1">
    <Heading>
      <Text>Quiz Performance of {activePage}: {quiz?.title} {activePage === ActivePage.Individual && entry && `${entry.firstName} ${entry.lastName}`}</Text>
      <Button
        onClick={() => setActivePage(ActivePage.Population)}
        isDisabled={activePage === ActivePage.Individual}
        variant={activePage === ActivePage.Population ? "outline" : ""}
      >Population</Button>
      <Button
        onClick={() => setActivePage(ActivePage.Participants)}
        isDisabled={activePage === ActivePage.Individual}
        variant={activePage === ActivePage.Participants ? "outline" : ""}
      >Participants</Button>
      {activePage === ActivePage.Individual && <Button
        onClick={() => {
          setActivePage(ActivePage.Participants);
          setQuizEntryId("");
        }}
        variant={activePage === ActivePage.Individual ? "outline" : ""}
      >Back</Button>}
    </Heading>
    { page }
  </Container>;
};
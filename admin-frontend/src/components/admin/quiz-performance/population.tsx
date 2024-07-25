import { useState, useEffect } from "react";
import { TableContainer, Table, Tr, Td, Tbody } from "@chakra-ui/react";
import { QuizEntry, GetQuizQuizGetResponse, getQuizQuizGet, GetAdminQuizEntriesAdminQuizEntriesGetResponse, getAdminQuizEntriesAdminQuizEntriesGet, } from "../../../client";

export const Population = ({ quiz }: { quiz: GetQuizQuizGetResponse | null }) => {  
  const [entries, setEntires] = useState<GetAdminQuizEntriesAdminQuizEntriesGetResponse>([]);
  useEffect(() => {
    const getData = async () => {
      setEntires(await getAdminQuizEntriesAdminQuizEntriesGet());
    };
    getData().catch(console.error);
  }, []);
  
  return <TableContainer>
    <Table size="sm">
      <Tbody>
        {quiz?.controls.map(({ question, type, options }, questionIndex) => {
          return <Tr key={questionIndex}>
            <Td key={0}><span key={0} style={{ maxWidth: "300px", whiteSpace: "wrap" }}>{question}</span></Td>
            {
              (type?.includes("MultipleChoice")
                && options.map((option, optionIndex) => <Td key={optionIndex + 1} isNumeric>{option} {countMultiAnswer(entries, questionIndex, optionIndex)}</Td>))
              || (type?.includes("SingleChoice")
                && options.map((option, optionIndex) => <Td key={optionIndex + 1} isNumeric>{option} {countAnswer(entries, questionIndex, optionIndex, type as string)}</Td>))
            }
          </Tr>
        })}
      </Tbody>
    </Table>
  </TableContainer>;
};

export function countMultiAnswer(entries: QuizEntry[], questionIndex: number, optionIndex: number): number {
  let counts = 0;
  entries.forEach(({ answers }) => {
    const questionAnswers = answers?.[questionIndex];
    for (let i = 0; i < questionAnswers.length; i++) {
      if (questionAnswers[i] === optionIndex) {
        counts++;
      }
    }
  });
  return counts;
}

export function countAnswer(entries: QuizEntry[], questionIndex: number, optionIndex: number, type?: string): number {
  let counts = 0;
  entries.forEach(({ answers }) => {
    const questionAnswer = answers?.[questionIndex][0];
    if (questionAnswer === optionIndex) {
      counts++;
    }
  });
  return counts;
}

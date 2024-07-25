import { TableContainer, Table, Tr, Td, Tbody, Text } from "@chakra-ui/react";
import {  QuizEntry, Quiz } from "../../../client";

export const Individual = ({ entry, quiz }: { entry: QuizEntry | null, quiz: Quiz | null }) => {
 
  if (!entry || !quiz) {
    return <Text>Quiz couldn't load</Text>;
  }
  return <TableContainer>
    <Table size="sm">
      <Tbody>
        {quiz?.controls.map(({ question, type, options }, questionIndex) => {
          return <Tr key={questionIndex}>
            <Td key={0}><span key={0} style={{ maxWidth: "300px", whiteSpace: "wrap" }}>{question}</span></Td>
            {
              (type?.includes("MultipleChoice")
                && options.map((option, optionIndex) => {
                  const isSelected = entry.answers[questionIndex].includes(optionIndex);
                  return <Td color={isSelected ? "green" : "grey"}>{option} { isSelected ? "✓" : "" }</Td>;
                }))
              || (type?.includes("SingleChoice")
                && options.map((option, optionIndex) => {
                  const isSelected = entry.answers[questionIndex][0] === optionIndex
                  return <Td color={isSelected ? "green" : "grey"}>{option} { isSelected ? "✓" : "" }</Td>;
                }))
            }
          </Tr>
        })}
      </Tbody>
    </Table>
  </TableContainer>
};
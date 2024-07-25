import { useState, useEffect } from "react";
import { TableContainer, Table, Tr, Td, Tbody, Thead, Th, Button } from "@chakra-ui/react";
import { getAdminQuizParticipantsAdminQuizParticipantsGet, GetAdminQuizParticipantsAdminQuizParticipantsGetResponse } from "../../../client";

export const Participants = ({ onSetQuizEntryId }: { onSetQuizEntryId: (quizEntryId: string) => void }) => {
  const [quizParticipants, setQuizParticipants] = useState<GetAdminQuizParticipantsAdminQuizParticipantsGetResponse>([]);
  useEffect(() => {
    const getData = async () => {
      setQuizParticipants(await getAdminQuizParticipantsAdminQuizParticipantsGet());
    };
    getData().catch(console.error);
  }, []);
  return <TableContainer>
    <Table size="sm">
      <Thead>
        <Tr>
          <Th key={0}>User</Th>
          <Th key={1}>Commands</Th>
        </Tr>
      </Thead>
      <Tbody>
        {
          quizParticipants.map(({ email, firstName, lastName, quizId, quizEntryId }, index) =>
            <Tr key={index}>
              <Td>{firstName} {lastName}</Td>
              <Td>
                <Button onClick={() => onSetQuizEntryId(quizEntryId)}>View</Button>
              </Td>
            </Tr>
          )
        }
      </Tbody>
    </Table>
  </TableContainer>;
};
import React from "react";
import { Container, IconWrapper, IconSearch, Input } from "./styles";

interface InputSearchProps {
  search: string;
  onSearch: (text: string) => void;
}

const InputSearch: React.FC<InputSearchProps> = ({ search, onSearch }) => {
  return (
    <Container>
      <IconWrapper>
        <IconSearch />
      </IconWrapper>
      <Input
        placeholder="Digite para buscar um personagem..."
        value={search}
        onChangeText={onSearch}
      />
    </Container>
  );
};

export default InputSearch;

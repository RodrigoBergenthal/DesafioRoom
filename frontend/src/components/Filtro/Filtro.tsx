/** @jsxImportSource @emotion/react */
// Importa a biblioteca Emotion para estilização com CSS-in-JS
import React, { useState, ChangeEvent, FormEvent } from 'react';
// Importa React e os hooks useState, ChangeEvent e FormEvent

import { formStyle, inputStyle, buttonStyle, selectStyle, suggestionStyle, suggestionsContainerOpenStyle, containerStyle } from './style';
// Importa os estilos CSS-in-JS para os componentes

// Define a interface FiltroProps que descreve as propriedades esperadas pelo componente Filtro
interface FiltroProps {
  onFilter: (title: string, status: string, user: string) => void; // Função para filtrar as tarefas
  taskTitles: string[]; // Lista de títulos das tarefas
}

// Define o componente funcional Filtro
const Filtro: React.FC<FiltroProps> = ({ onFilter, taskTitles }) => {
  // Define o estado title para armazenar o título da tarefa
  const [title, setTitle] = useState<string>('');
  // Define o estado status para armazenar o status da tarefa
  const [status, setStatus] = useState<string>('');
  // Define o estado user para armazenar o nome do usuário associado à tarefa
  const [user, setUser] = useState<string>('');
  // Define o estado suggestions para armazenar as sugestões de títulos de tarefas
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Previne o comportamento padrão de recarregar a página
    onFilter(title, status, user); // Chama a função onFilter passada como prop
  };

  // Função para lidar com a mudança no campo de título
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTitle(value);
    if (value.length > 0) {
      const filteredSuggestions = taskTitles.filter(title =>
        title.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // Função para lidar com o clique em uma sugestão
  const handleSuggestionClick = (suggestion: string) => {
    setTitle(suggestion);
    setSuggestions([]);
  };

  // Renderiza o componente
  return (
    <div css={containerStyle}>
      <form onSubmit={handleSubmit} css={formStyle}>
        <div css={{ position: 'relative', width: '100%' }}>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Buscar por título"
            css={inputStyle}
          />
          {suggestions.length > 0 && (
            <div css={suggestionsContainerOpenStyle}>
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  css={suggestionStyle}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          css={selectStyle}
        >
          <option value="">Todos</option>
          <option value="completed">Concluída</option>
          <option value="pending">Pendente</option>
        </select>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Buscar por usuário"
          css={inputStyle}
        />
        <button type="submit" css={buttonStyle}>Filtrar</button>
      </form>
    </div>
  );
};

export default Filtro;
// Exporta o componente Filtro como padrão
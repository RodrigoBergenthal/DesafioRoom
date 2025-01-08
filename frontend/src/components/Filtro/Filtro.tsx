/** @jsxImportSource @emotion/react */
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { formStyle, inputStyle, buttonStyle, selectStyle, suggestionStyle, suggestionsContainerOpenStyle, containerStyle } from './style';

interface FiltroProps {
  onFilter: (title: string, status: string, user: string) => void;
  taskTitles: string[];
}

const Filtro: React.FC<FiltroProps> = ({ onFilter, taskTitles }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');
  const [user, setUser] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFilter(title, status, user);
  };

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

  const handleSuggestionClick = (suggestion: string) => {
    setTitle(suggestion);
    setSuggestions([]);
  };

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
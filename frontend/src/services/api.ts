let mockTasks = [
    { id: 1, title: 'Aprender React', completed: false },
    { id: 2, title: 'Estudar TypeScript', completed: true },
  ];
  
  const api = {
    get: async (url: string) => {
      if (url === '/tasks') return { data: mockTasks };
      return { data: {} };
    },
    post: async (url: string, body: any) => {
      if (url === '/tasks') {
        const newTask = { id: mockTasks.length + 1, ...body };
        mockTasks.push(newTask);
        return { data: newTask };
      }
      return { data: {} };
    },
    put: async (url: string, body: any) => {
      const taskId = parseInt(url.split('/').pop() || '0');
      mockTasks = mockTasks.map(task =>
        task.id === taskId ? { ...task, ...body } : task
      );
      return { data: mockTasks.find(task => task.id === taskId) };
    },
    delete: async (url: string) => {
      const taskId = parseInt(url.split('/').pop() || '0');
      mockTasks = mockTasks.filter(task => task.id !== taskId);
      return { data: { success: true } };
    },
  };
  
  export default api;
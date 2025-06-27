import React, { useState, useEffect } from 'react';

function Todo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // For demo purposes, we'll simulate the API calls
  const apiUrl = "http://localhost:8000";

  // Simulate fetching todos on component mount
  useEffect(() => {
    // In a real app, you'd fetch from your API here
    // fetchTodos();
  }, []);

  const handleSubmit = async () => {
    if (title.trim() === '' || description.trim() === '') {
      setError("Please fill in both title and description");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Simulate API call - in real app, uncomment the fetch code
      /*
      const response = await fetch(apiUrl + "/todos", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, description })
      });

      if (!response.ok) {
        throw new Error("Unable to create the todo item");
      }
      */

      // For demo, we'll add directly to state
      const newTodo = {
        id: Date.now(), // Simple ID generation for demo
        title,
        description,
        completed: false,
        createdAt: new Date().toISOString()
      };

      setTodos([...todos, newTodo]);
      setTitle("");
      setDescription("");
    } catch (err) {
      setError(err.message || "Unable to create the todo item");
    } finally {
      setLoading(false);
    }
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  // Inline styles
  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      background: 'linear-gradient(135deg, #fceabb, #f8b500)',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    todoCard: {
      backgroundColor: 'white',
      borderRadius: '24px',
      padding: '32px',
      maxWidth: '640px',
      width: '100%',
      boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)',
    },
    header: {
      fontSize: '28px',
      textAlign: 'center',
      marginBottom: '24px',
      color: '#5e548e',
      fontWeight: 'bold',
      margin: '0 0 24px 0'
    },
    formSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      marginBottom: '24px'
    },
    input: {
      padding: '12px 16px',
      border: '1px solid #d1d5db',
      borderRadius: '12px',
      fontSize: '16px',
      transition: 'all 0.3s ease',
      outline: 'none',
      fontFamily: 'inherit'
    },
    inputFocus: {
      borderColor: '#8b5cf6',
      boxShadow: '0 0 0 3px rgba(139, 92, 246, 0.1)',
      transform: 'translateY(-1px)'
    },
    button: {
      background: loading ? '#d1d5db' : 'linear-gradient(90deg, #5e60ce, #7400b8)',
      color: 'white',
      border: 'none',
      padding: '12px 20px',
      fontSize: '16px',
      fontWeight: '500',
      borderRadius: '12px',
      cursor: loading ? 'not-allowed' : 'pointer',
      transition: 'all 0.3s ease',
      outline: 'none',
      fontFamily: 'inherit'
    },
    error: {
      backgroundColor: '#fef2f2',
      border: '1px solid #fecaca',
      color: '#dc2626',
      padding: '12px 16px',
      borderRadius: '12px',
      marginBottom: '16px',
      fontWeight: '500'
    },
    taskPanel: {
      marginTop: '32px'
    },
    taskHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '16px'
    },
    taskTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#1f2937',
      margin: '0'
    },
    taskStats: {
      fontSize: '14px',
      color: '#6b7280'
    },
    todoList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    todoItem: {
      borderLeft: '4px solid #ec4899',
      padding: '16px',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.2s ease',
      backgroundColor: '#fdf2f8',
      cursor: 'pointer'
    },
    todoItemCompleted: {
      backgroundColor: '#f0fdf4',
      borderLeftColor: '#22c55e'
    },
    todoContent: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between'
    },
    todoText: {
      flex: 1
    },
    todoTitle: {
      fontSize: '18px',
      fontWeight: '600',
      margin: '0 0 4px 0',
      color: '#7c3aed',
      transition: 'all 0.2s ease'
    },
    todoTitleCompleted: {
      textDecoration: 'line-through',
      color: '#6b7280'
    },
    todoDescription: {
      color: '#4b5563',
      margin: '0 0 8px 0',
      lineHeight: '1.5'
    },
    todoDescriptionCompleted: {
      textDecoration: 'line-through'
    },
    todoDate: {
      fontSize: '12px',
      color: '#9ca3af',
      margin: '8px 0 0 0'
    },
    todoActions: {
      display: 'flex',
      gap: '8px',
      marginLeft: '16px',
      flexShrink: 0
    },
    actionBtn: {
      padding: '6px 12px',
      border: 'none',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      outline: 'none'
    },
    completeBtn: {
      backgroundColor: '#22c55e',
      color: 'white'
    },
    uncompleteBtn: {
      backgroundColor: '#eab308',
      color: 'white'
    },
    deleteBtn: {
      backgroundColor: '#ef4444',
      color: 'white'
    },
    emptyState: {
      textAlign: 'center',
      padding: '48px 0',
      color: '#6b7280'
    },
    emptyIcon: {
      fontSize: '64px',
      marginBottom: '16px',
      opacity: 0.5
    },
    emptyText: {
      fontSize: '18px',
      margin: '0'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.todoCard}>
        <h1 style={styles.header}>
          📝 Stylish ToDo App (MERN Stack)
        </h1>

        <div style={styles.formSection}>
          <input
            type="text"
            style={styles.input}
            placeholder="Enter task title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={loading}
          />
          <input
            type="text"
            style={styles.input}
            placeholder="Enter task description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={loading}
          />
          <button 
            style={styles.button}
            onClick={handleSubmit}
            disabled={loading}
            onMouseEnter={(e) => {
              if (!loading) {
                e.target.style.background = 'linear-gradient(90deg, #6930c3, #5e60ce)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(94, 96, 206, 0.3)';
              }
            }}
            onMouseLeave={(e) => {
              if (!loading) {
                e.target.style.background = 'linear-gradient(90deg, #5e60ce, #7400b8)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }
            }}
          >
            {loading ? '⏳ Adding...' : '➕ Add Task'}
          </button>
        </div>

        {error && (
          <div style={styles.error}>
            ⚠️ {error}
          </div>
        )}

        {todos.length > 0 && (
          <div style={styles.taskPanel}>
            <div style={styles.taskHeader}>
              <h3 style={styles.taskTitle}>
                Your Tasks ({todos.length})
              </h3>
              <div style={styles.taskStats}>
                Completed: {todos.filter(todo => todo.completed).length}
              </div>
            </div>
            
            <div style={styles.todoList}>
              {todos.map((todo) => (
                <div 
                  key={todo.id} 
                  style={{
                    ...styles.todoItem,
                    ...(todo.completed ? styles.todoItemCompleted : {})
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                  }}
                >
                  <div style={styles.todoContent}>
                    <div style={styles.todoText}>
                      <h4 style={{
                        ...styles.todoTitle,
                        ...(todo.completed ? styles.todoTitleCompleted : {})
                      }}>
                        {todo.title}
                      </h4>
                      <p style={{
                        ...styles.todoDescription,
                        ...(todo.completed ? styles.todoDescriptionCompleted : {})
                      }}>
                        {todo.description}
                      </p>
                      {todo.createdAt && (
                        <p style={styles.todoDate}>
                          Created: {new Date(todo.createdAt).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                    
                    <div style={styles.todoActions}>
                      <button
                        onClick={() => toggleComplete(todo.id)}
                        style={{
                          ...styles.actionBtn,
                          ...(todo.completed ? styles.uncompleteBtn : styles.completeBtn)
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.opacity = '0.8';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.opacity = '1';
                        }}
                      >
                        {todo.completed ? '↩️' : '✅'}
                      </button>
                      <button
                        onClick={() => deleteTodo(todo.id)}
                        style={{...styles.actionBtn, ...styles.deleteBtn}}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = '#dc2626';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = '#ef4444';
                        }}
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {todos.length === 0 && !loading && (
          <div style={styles.emptyState}>
            <div style={styles.emptyIcon}>📝</div>
            <p style={styles.emptyText}>No tasks yet. Add your first task above!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Todo;
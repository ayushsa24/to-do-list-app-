import { useState } from 'react';
import { Plus, Trash2, Check, Circle } from 'lucide-react';

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const activeCount = tasks.filter(t => !t.completed).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8">
            <h1 className="text-4xl font-bold text-white text-center">My Tasks</h1>
            <p className="text-purple-100 text-center mt-2">{activeCount} active tasks</p>
          </div>

          <div className="p-6">
            <div className="flex gap-2 mb-6">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTask()}
                placeholder="Add a new task..."
                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
              />
              <button
                onClick={addTask}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2 font-medium"
              >
                <Plus size={20} />
                Add
              </button>
            </div>

            <div className="flex gap-2 mb-6">
              {['all', 'active', 'completed'].map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    filter === f
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>

            <div className="space-y-2">
              {filteredTasks.length === 0 ? (
                <p className="text-center text-gray-400 py-12">
                  {filter === 'completed' ? 'No completed tasks yet' : 'No tasks yet. Add one to get started!'}
                </p>
              ) : (
                filteredTasks.map(task => (
                  <div
                    key={task.id}
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                  >
                    <button
                      onClick={() => toggleTask(task.id)}
                      className="flex-shrink-0"
                    >
                      {task.completed ? (
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <Check size={16} className="text-white" />
                        </div>
                      ) : (
                        <Circle size={24} className="text-gray-400 hover:text-purple-500 transition-colors" />
                      )}
                    </button>
                    <span
                      className={`flex-1 ${
                        task.completed ? 'line-through text-gray-400' : 'text-gray-800'
                      }`}
                    >
                      {task.text}
                    </span>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 transition-all"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
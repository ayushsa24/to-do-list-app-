# 📝 To-Do List App

A beautiful and intuitive task management application built with React and Tailwind CSS.

![To-Do List App](<img width="1316" height="914" alt="image" src="https://github.com/user-attachments/assets/5c637c13-5711-4e51-a6bb-cdcfc402d746" />)

## ✨ Features

- **Add Tasks** - Quickly add new tasks with the input field or by pressing Enter
- **Complete Tasks** - Mark tasks as complete or incomplete with a single click
- **Delete Tasks** - Remove tasks you no longer need (hover to reveal delete button)
- **Filter Tasks** - View all tasks, only active tasks, or completed tasks
- **Task Counter** - Keep track of your active tasks at a glance
- **Beautiful UI** - Modern gradient design with smooth animations and transitions
- **Responsive** - Works seamlessly on desktop, tablet, and mobile devices

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/ayushsa24/todo-list-app.git
cd todo-list-app
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

4. Open your browser and navigate to `http://localhost:3000`

## 🛠️ Built With

- **React** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **React Hooks** - useState for state management

## 💡 Usage

### Adding a Task
1. Type your task in the input field
2. Click the "Add" button or press Enter

### Completing a Task
- Click the circle icon next to a task to mark it as complete
- Click again to mark it as incomplete

### Deleting a Task
- Hover over a task to reveal the delete button
- Click the trash icon to remove the task

### Filtering Tasks
- Click "All" to see all tasks
- Click "Active" to see only incomplete tasks
- Click "Completed" to see only completed tasks

## 🎨 Customization

### Changing Colors

The app uses a purple and pink gradient theme. To customize colors, modify the Tailwind classes in the component:

```jsx
// Change the main gradient
className="bg-gradient-to-br from-purple-500 via-pink-500 to-red-500"

// Change button colors
className="bg-purple-600 hover:bg-purple-700"
```

### Adding Persistence

To save tasks to local storage, you can add this functionality:

```jsx
// Save to localStorage whenever tasks change
useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}, [tasks]);

// Load from localStorage on mount
useEffect(() => {
  const saved = localStorage.getItem('tasks');
  if (saved) setTasks(JSON.parse(saved));
}, []);
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Design inspiration from modern task management apps
- Built with ❤️ using React

## 📧 Contact

Project Link: [https://github.com/ayushsa24/todo-list-app](https://github.com/ayushsa24/todo-list-app)

---

Made with 💜 by [Ayush saini]

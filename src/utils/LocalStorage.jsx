
const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "employee1@example.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Update Dashboard UI",
        taskDate: "2026-07-08",
        taskDescription: "Improve the employee dashboard layout and responsiveness.",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDate: "2026-07-05",
        taskDescription: "Resolve login authentication issue.",
        category: "Bug Fix"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Profile Page",
        taskDate: "2026-07-10",
        taskDescription: "Develop employee profile page using React.",
        category: "Development"
      }
    ]
  },

  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",

    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Landing Page",
        taskDate: "2026-07-09",
        taskDescription: "Create a modern landing page UI.",
        category: "UI/UX"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDate: "2026-07-04",
        taskDescription: "Connect frontend with backend APIs.",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Optimize Images",
        taskDate: "2026-07-03",
        taskDescription: "Compress website images for better performance.",
        category: "Optimization"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Navbar Component",
        taskDate: "2026-07-11",
        taskDescription: "Build reusable navbar component.",
        category: "React"
      }
    ]
  },

  {
    id: 3,
    firstName: "Amit",
    email: "employee3@example.com",
    password: "123",

    taskNumbers: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Backup",
        taskDate: "2026-07-08",
        taskDescription: "Take MongoDB backup.",
        category: "Database"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Schema Validation",
        taskDate: "2026-07-10",
        taskDescription: "Add validation to user schema.",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Backend",
        taskDate: "2026-07-02",
        taskDescription: "Deploy Express server to production.",
        category: "Deployment"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "JWT Authentication",
        taskDate: "2026-07-01",
        taskDescription: "Implement secure JWT authentication.",
        category: "Security"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write API Docs",
        taskDate: "2026-07-12",
        taskDescription: "Document all REST APIs.",
        category: "Documentation"
      }
    ]
  },

  {
    id: 4,
    firstName: "Neha",
    email: "employee4@example.com",
    password: "123",

    taskNumbers: {
      active: 3,
      newTask: 1,
      completed: 2,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Test Payment Module",
        taskDate: "2026-07-09",
        taskDescription: "Perform payment gateway testing.",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Unit Tests",
        taskDate: "2026-07-06",
        taskDescription: "Write Jest unit tests.",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Checkout Bug",
        taskDate: "2026-07-04",
        taskDescription: "Resolve checkout page issue.",
        category: "Bug Fix"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Code Review",
        taskDate: "2026-07-13",
        taskDescription: "Review teammate's pull requests.",
        category: "Review"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update Documentation",
        taskDate: "2026-07-15",
        taskDescription: "Update project README.",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Refactor Components",
        taskDate: "2026-07-07",
        taskDescription: "Clean up React components.",
        category: "Refactoring"
      }
    ]
  },

  {
    id: 5,
    firstName: "Vikram",
    email: "employee5@example.com",
    password: "123",

    taskNumbers: {
      active: 4,
      newTask: 2,
      completed: 2,
      failed: 1
    },

    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Chat Module",
        taskDate: "2026-07-10",
        taskDescription: "Develop real-time chat feature.",
        category: "Development"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Socket.io Setup",
        taskDate: "2026-07-08",
        taskDescription: "Configure Socket.io server.",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Notification System",
        taskDate: "2026-07-11",
        taskDescription: "Implement push notifications.",
        category: "Feature"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix Chat Delay",
        taskDate: "2026-07-05",
        taskDescription: "Reduce latency in chat messages.",
        category: "Performance"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Dark Mode",
        taskDate: "2026-07-14",
        taskDescription: "Add dark mode support.",
        category: "UI"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Profile Settings",
        taskDate: "2026-07-06",
        taskDescription: "Create settings page for users.",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Accessibility Improvements",
        taskDate: "2026-07-16",
        taskDescription: "Improve accessibility across the application.",
        category: "Accessibility"
      }
    ]
  }
];



const admin = [
    {
    "id": 101,
    "email": "admin@example.com",
    "password": "123"
  }
];


export const setLocalStorage = (employeesData = employees, adminData = admin) => {
    localStorage.setItem('Employee', JSON.stringify(employeesData))
    localStorage.setItem('Admin', JSON.stringify(adminData))
}

export const getLocalStorage = () => {
  let employees = JSON.parse(localStorage.getItem('Employee'))
  let admin = JSON.parse(localStorage.getItem('Admin'))

  return { employees, admin };
}

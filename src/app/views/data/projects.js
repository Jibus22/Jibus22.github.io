export const projects = [
  {
    href: "https://github.com/Jibus22/bootcamp_embedded",
    img: "https://github.com/Jibus22/bootcamp_embedded/blob/main/_resources/42chips_devboard.jpeg?raw=true",
    title: "Bootcamp embedded development",
    prez: "Development of a <strong>firmware with</strong> 10 modes - displaying values from adc potentiometers, sensors, clock (...) on a led screen, clock setting thru uart bus (...).",
    keywords: [
      "C",
      "atmega328p",
      "library-free",
      "interrupts",
      "timers",
      "adc",
      "uart",
      "i2c",
      "spi",
    ],
    category: ["all", "system"],
  },
  {
    href: "https://github.com/Jibus22/bootcamp_python_data",
    img: "https://github.com/Jibus22/bootcamp_python_data/blob/main/_resources/boxplot.jpeg?raw=true",
    title: "Bootcamp data science",
    prez: "Matrix manipulations, image filters, implementation of k-mean clustering algorithm, feature engineering and ploting data with panda.",
    keywords: ["python", "numpy", "panda", "matplotlib"],
    category: ["all", "datascience"],
  },
  {
    href: "https://github.com/Jibus22/taskmaster_async",
    img: "https://github.com/Jibus22/taskmaster_async/blob/main/_resources/Taskmaster_timer_logic.jpg?raw=true",
    title: "taskmaster async",
    prez: "Implementation of a job supervisor (supervisord-like). Implemented my own line editor with history and auto-completion. Integration of a yaml parsing library for the configuration file. Implemented a minimalist logging library working with a singleton. Jobs and timers are managed with signal handlers. Timers are scheduled through a queue.",
    keywords: ["C", "system"],
    category: ["all", "system"],
  },
  {
    href: "https://github.com/Jibus22/taskmaster_multi_threaded",
    img: "https://github.com/Jibus22/taskmaster_multi_threaded/blob/main/_resources/producer_consumer_workflow.jpg?raw=true",
    title: "taskmaster multi-threaded",
    prez: "Implementation of a job supervisor (supervisord-like). Implemented my own line editor with history and auto-completion. Integration of a yaml parsing library for the configuration file. Implemented a minimalist logging library working with a singleton. Study case I did for myself to dig multi-threading. Designed with a producer-consumer model to handle user input the safest way. Usage of mutex, semaphores, barriers, conditional locks and read/write locks.",
    keywords: ["C", "system", "pthread"],
    category: ["all", "system"],
  },
  {
    href: "https://github.com/Jibus22/woody_woodpacker",
    img: "https://github.com/Jibus22/woody_woodpacker/blob/main/_resources/vimdiff.jpg?raw=true",
    title: "woody_woodpacker",
    prez: "Shellcode injection, encrypt and inject self-decryption code into executable ELF binary target. Implemented segment padding injection technique (taking advantage of code cave after an executable load segment) as well as elf shifting if no codecave had been found.",
    keywords: ["C", "security", "packer", "ELF"],
    category: ["all", "system", "security"],
  },
  {
    href: "https://github.com/Jibus22/ft_nm",
    img: "https://github.com/Jibus22/ft_nm/blob/main/_resources/ELF_layout.jpg?raw=true",
    title: "ft_nm",
    prez: "Implemented nm utility. Dive into the ELF format. Implementation of a RBT data structure to optimize performance.",
    keywords: ["C", "ELF"],
    category: ["all", "system"],
  },
  {
    href: "https://github.com/Jibus22/ft_linux",
    img: "https://github.com/Jibus22/ft_linux/blob/main/_resources/42aa6be3455d9fe99e691b1cb34d9730.jpg?raw=true",
    title: "ft_linux",
    prez: "Built my own linux distribution following the LFS book. Started from a lightweight virtual Alpine release as a host, then built compilation toolchain, filesystem and finally compiled linux kernel.",
    keywords: [
      "System",
      "cross-compilation",
      "kernel compilation",
      "linux from scratch",
    ],
    category: ["all", "system"],
  },
  {
    href: "https://github.com/Jibus22/malloc",
    img: "/images/galaxy3.jpg",
    title: "malloc",
    prez: "implementation of malloc with mmap()",
    keywords: ["C", "unix", "system", "mmap"],
    category: ["all", "system"],
  },
  {
    href: "https://github.com/Jibus22/webserv",
    img: "https://github.com/Jibus22/webserv/blob/main/.siege_res.jpg?raw=true",
    title: "webserv",
    prez: "Implemented a HTTP/1.1 web server, nginx-like. Using epoll() for linux & kqueue() for macosx to poll socket I/O. CGI handling. Profiling with siege.",
    keywords: ["C++98", "HTTP", "sockets"],
    category: ["all", "system"],
  },
  {
    href: "https://github.com/Jibus22/ft_containers",
    img: "https://github.com/Jibus22/ft_containers/blob/main/.ftc_osx.jpg?raw=true",
    title: "ft_containers",
    prez: "Implemented some STL containers: map, list, vector, stack, queue with time complexity of algorithms equivalent to the STL. Implementation of BST, circular linked list.",
    keywords: [
      "C++98",
      "STL",
      "template",
      "SFINAE",
      "data structures",
      "iterators",
      "constness",
    ],
    category: ["all", "system"],
  },
  {
    href: "https://github.com/Jibus22/ft_transcendence",
    img: "/images/ft_transcendance.jpg",
    title: "ft_transcendence",
    prez: "Web application of an online pong game with leaderboard, profile dashboard, chat interface. Implemented part of back-end, all websocket system and front-end in the end. Built and deployed with docker-compose",
    keywords: [
      "reactjs",
      "nestjs",
      "websoket",
      "postgresql",
      "SQL",
      "OAuth 2.0",
      "docker-compose",
      "APIs",
    ],
    category: ["all", "web", "devops"],
  },
  {
    href: "https://github.com/Jibus22/ft_services",
    img: "/images/galaxy2.jpg",
    title: "ft_services",
    prez: "Deploy a microservices infrastructure with k8s, with a script. Services are: a nginx server and reverse proxy, wordpress, phpmyadmin, mariadb, ftp server, grafana monitoring dashboard, influxdb. All docker images are hand-made from an alpine OS",
    keywords: ["kubernetes", "docker", "bash", "minikube", "alpine"],
    category: ["all", "devops"],
  },
];

export const filterButtons = [
  {
    icon: "icon-flash",
    text: "All",
    category: "all",
  },
  {
    icon: "icon-gear",
    text: "System",
    category: "system",
  },
  {
    icon: "icon-globe",
    text: "Web",
    category: "web",
  },
  {
    icon: "icon-cloud",
    text: "Devops",
    category: "devops",
  },
  {
    icon: "icon-pie-chart",
    text: "Datascience",
    category: "datascience",
  },
  {
    icon: "icon-bug",
    text: "Cybersecurity",
    category: "security",
  },
];

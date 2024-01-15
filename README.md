# react crash learning 

- 该项目利用react创建了一个任务跟踪应用程序，可以增删改查和标记提醒。适合拿来练手入门，涉及了传递数据、JSX、hooks、json、异步编程等等知识。

- useState：useState是React Hooks的一部分，它允许你在函数组件中添加状态。你可以使用useState来创建一个包含状态值和更新该状态值的函数的数组。例如：
```
const [count, setCount] = useState(0);
```
这将创建一个名为count的状态变量，初始值为0，以及一个名为setCount的函数，用于更新count的值。

- useEffect：useEffect用于处理副作用，例如数据获取、DOM操作等。你可以在函数组件中使用useEffect来指定在组件渲染后执行的操作。例如：

```
useEffect(() => {
  // 执行副作用操作的代码
}, [dependency]);
```
dependency是一个可选的数组，用于指定什么情况下触发副作用操作。


- useContext：读取并订阅上下文。例如，您的应用程序的顶级组件可以将当前UI主题传递给所有下面的组件，无论有多深。
- useRef：声明一个引用。您可以在其中保存任何值，但最常用的是保存DOM节点。
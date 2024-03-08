/* export default function ToDo({ task, isDone }) {
    return (
        <div className="left-align">
            <ul>
                <li><strong>Task: </strong>{task}</li>
            </ul>
        </div>
    )
} */

// conditional rendering #1
/* export default function ToDo({ task, isDone }) {
    if (isDone === true) {
        return <li>Finished: {task}</li>
    }
    else {
        return <li>Work on: {task}</li>
    }
} */
// conditional rendering #2
/* export default function ToDo({ task, isDone }) {
    if (isDone === true) {
        return <li>Finished: {task}</li>
    }
        return <li>Work on: {task}</li>
} */

// conditional rendering #3
/* export default function ToDo({ task, isDone }) {
    return (
        <li>{isDone? 'Finished' : 'Work on'}: {task}</li>
    )
} */

// conditional rendering #4: &&
/* export default function ToDo({ task, isDone }) {
    return (
        <li>{isDone && 'Done: '} {task}</li>
    )
} */
// conditional rendering #5: ||
/* export default function ToDo({ task, isDone }) {
    return (
        <li>{isDone || 'Do It: '} {task}</li>
    )
} */

// conditional rendering #6
export default function ToDo({ task, isDone }) {
    let listItem;
    if (isDone) {
        listItem = <li>Finished: {task}</li>
    }
    else{
        listItem = <li>Work on: {task}</li>
    }
    return listItem;
}
import { Authenticator } from '@aws-amplify/ui-react';

import '@aws-amplify/ui-react/styles.css'
import { generateClient } from 'aws-amplify/data';
import { useEffect, useState } from 'react';
import type { Schema } from '../amplify/data/resource';

const client = generateClient<Schema>();

function App() {
    const [todos, setTodos] = useState<Array<Schema['Todo']['type']>>([]);

    useEffect(() => {
        client.models.Todo.observeQuery().subscribe({
            next: (data) => setTodos([...data.items])
        });
    }, []);


    function deleteTodo(id: string) {
        client.models.Todo.delete({ id })
    }

    function createTodo() {
        client.models.Todo.create({ content: window.prompt('Todo content') });
    }

    return (<Authenticator>
        { ({
            signOut,
            user
        }) => (
            <main>
                <h1>{ user?.signInDetails?.loginId }'s todos</h1>
                <button onClick={ createTodo }>+ new</button>
                <ul>
                    { todos.map((todo) => (
                        <li
                            onClick={ () => deleteTodo(todo.id) }
                            key={ todo.id }>{ todo.content }</li>
                    )) }
                </ul>
                <div>
                    🥳 App successfully hosted. Try creating new TODO's.
                    <br/>
                    <a href="https://next-release-dev.d1ywzrxfkb9wgg.amplifyapp.com/react/start/quickstart/vite-react-app/#step-2-add-delete-to-do-functionality">
                        Review next step of this tutorial.
                    </a>
                </div>
                <div>
                    <button onClick={ signOut }>Sign out</button>
                </div>
            </main>

        ) }
    </Authenticator>);
}

export default App;

import React , {useState} from 'react';

export const AddTodos = ({addTodos}) => {
    const [title, setTitle] = useState('');
     const [desc, setDesc] = useState('');
    
    let submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert('Title or Description and mendatory')
        }else{
        addTodos(title ,desc);
        setDesc('');
        setTitle('');
        }
    }
    return ( 
        <div className='container'>
            <h1>Add Todos</h1>
          <form onSubmit={submit}>
               <div className="mb-3">
                 <label htmlFor="title" className="title">Title</label>
                 <input type="text" value={title} onChange={(e) => {setTitle(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                 
               <div className="mb-3">
                 <label htmlFor="decs" className="form-label">Description</label>
                 <input type="text" value={desc} onChange={(e) => {setDesc(e.target.value)}} className="form-control" id="exampleInputPassword1"/>
               </div>
                <button type="submit" className="btn btn-primary">Add Todo</button>
                </div>
           </form>
        </div>
    )
}
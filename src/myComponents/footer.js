import React from 'react'

export default function Footer() {
    let footerStyle = {
        
        width:'100%',
        position:'relative'
    }
    return (
        <footer className='bg-dark text-light center py-3' style={footerStyle}>
            <p className='text-center'>

            CopyRight @2021 TodoList
            </p>
        </footer>
    )
}

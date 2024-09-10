import React, {useState, useEffect} from "react";
import Editor from './components/Editor';
import Sidebar from './components/Sidebar';
import Split from "react-split";
import { nanoid } from "nanoid";


export default function App() {


    return (
        <div>
            <Split
                sizes={[30, 70]} 
                direction="horizontal" 
                className="split"
            >
                <Sidebar />
                <Editor />
            </Split>
        </div>
    )
}
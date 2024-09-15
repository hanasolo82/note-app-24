import React,{useState} from "react";
import ReactMde from "react-mde";
import Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";

export default function Editor({tempNoteText, setTempNoteText}) {
    
    const [selectedTab, setSelectedTab] = useState ("write");

    const converter = new Showdown.Converter({
        simplifyAutoLink: true,
        exclusionTrailingPunctuationFromURLs: true,
        strikethrough: true,
        tables: true, 
        tasklists: true,
        simpleLineBreaks: true,
        openLinksInNewWindow: true,
        emoji: true, 
        underline: true, /*experimental */

    })
    return (
        <section  className='pane editor'>
            <ReactMde 
                value={tempNoteText}
                onChange={setTempNoteText}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown) =>
                  Promise.resolve(converter.makeHtml(markdown))
                }
                minEditorHeight={80}
                heightUnits="vh"
            />

        </section>
    )
}
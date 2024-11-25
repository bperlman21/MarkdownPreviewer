import {useState} from 'react'
import './App.css'
import Markdown from 'react-markdown'

function App() {
    const text = "# Welcome to my React Markdown Previewer!\n" +
        "\n" +
        "## This is a sub-heading...\n" +
        "### And here's some other cool stuff:\n" +
        "\n" +
        "Heres some code, `<div></div>`, between 2 backticks.\n" +
        "\n" +
        "```\n" +
        "// this is multi-line code:\n" +
        "\n" +
        "function anotherExample(firstLine, lastLine) {\n" +
        "  if (firstLine == '```' && lastLine == '```') {\n" +
        "    return multiLineCode;\n" +
        "  }\n" +
        "}\n" +
        "```\n" +
        "\n" +
        "You can also make text **bold**... whoa!\n" +
        "Or _italic_.\n" +
        "Or... wait for it... **_both!_**\n" +
        "And feel free to go crazy ~~crossing stuff out~~.\n" +
        "\n" +
        "There's also [links](https://www.freecodecamp.org), and\n" +
        "> Block Quotes!\n" +
        "\n" +
        "And if you want to get really crazy, even tables:\n" +
        "\n" +
        "Wild Header | Crazy Header | Another Header?\n" +
        "------------ | ------------- | -------------\n" +
        "Your content can | be here, and it | can be here....\n" +
        "And here. | Okay. | I think we get it.\n" +
        "\n" +
        "- And of course there are lists.\n" +
        "- Some are bulleted.\n" +
        "- With different indentation levels.\n" +
        "- That look like this.\n" +
        "\n" +
        "\n" +
        "1. And there are numbered lists too.\n" +
        "1. Use just 1s if you want!\n" +
        "1. And last but not least, let's not forget embedded images:\n" +
        "\n" +
        "![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n";
    const [markdown, setMarkdown] = useState(text)

    return (
        <>
            <h1>Markdown Previewer</h1>
            <div id={"content"}>
                <div className={'f1'}>
                    <div id={"editor-container"}>

                        <div className={"toolbar-container"}>
                            <h4>Editor (You can edit the text here!)</h4>
                        </div>
                        <div id={"textarea-container"}>
                <textarea id={"editor"} defaultValue={markdown} onChange={(e) => setMarkdown(e.target.value)}>

                </textarea>
                        </div>

                    </div>
                </div>
                <div className={'f1'}>
                    <div id={"preview-container"}>

                        <div className={"toolbar-container"}>
                            <h4>Preview</h4>
                        </div>
                        <div id={"preview"}>
                            {/*maybe need a setState to update the editor/markup if text changes are made*/}
                            <Markdown>{markdown}</Markdown>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default App

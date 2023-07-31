import Head from "next/head";
import { useState } from "react";
import styles from './index.module.css';


export default function Home() {
    const [essayPrompt, setEssayPrompt] = useState("");
    const [essayResult, setEssayResult] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    //Get the Prompt from a User

    
    async function onSubmit(event) {
        event.preventDefault();
        setIsLoading(true);
        
        try {
            //Send the Prompt to OpenAI/GPT
            const response = await fetch("api/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({essayprompt: essayPrompt}),
            });

            const data = await response.json();
            if(response.status != 200) {
                throw data.error || new Error(`Request failed with status ${response.status}`);
            }

            //Update the view to show an Essay
            setEssayResult(data.result);
            setIsLoading(false);
            setEssayPrompt("");
            
        } catch (error) {
            //Print an error if it doesn't work
            console.error(error);
            alert(error.message);
        }
    }


    return (
    <div>
        <Head>
            <title>COF Academy Essay Generator</title>
            <link rel="icon" href="/cof_logo.png"/>
        </Head>

        <main className={styles.main}>
            <img src="/cof_logo.png"/>
            <h3 className={`${styles.cof_header}`}>
                Essay Generator
            </h3>
            <form onSubmit={onSubmit}>
                <input 
                    type="text"
                    name="essayprompt"
                    placeholder="Please insert a prompt for an essay"
                    value={essayPrompt}
                    onChange= {(e) => setEssayPrompt(e.target.value)}
                />
                <input type="submit" value="Create Essay"/>
                {isLoading ? <span className={styles.spinner}></span>: ''}
            </form>
            {essayResult &&
                    <p className={styles.paperparagraph} >{essayResult}</p>
                }
        </main>
    </div>
    )
}
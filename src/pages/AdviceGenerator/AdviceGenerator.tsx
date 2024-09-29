import {useEffect, useState} from "react";

import IconButton from "../../components/IconButton";
import Advice from "./Advice";

import dividerImageDesktop from "/images/pattern-divider-desktop.svg";
import dividerImageMobile from "/images/pattern-divider-mobile.svg";
import diceIcon from "/images/icon-dice.svg";

import "./AdviceGenerator.scss";

type advice = {
    advice: string;
    id: number;
}

export default function AdviceGenerator() {
    const [advice, setAdvice] = useState<advice | null>(null);
    const [previousAdviceId, setPreviousAdviceId] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchAdvice = () => {
        setLoading(true);

        fetch("https://api.adviceslip.com/advice")
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Advice not found: ${res.status}`);
                }
                return res.json();
            })
            .then((result) => {
                if (result.slip.id === previousAdviceId) {
                    fetchAdvice();
                }
                else {
                    setAdvice(result.slip);
                    setPreviousAdviceId(result.slip.id);
                    setLoading(false);
                }
            })
            .catch((error) => {
                console.error("Error fetching advice:", error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchAdvice();
    }, []);

    return (
        <main className="advice-generator">
            <div className="advice-generator__container">
                <article className="advice-generator__text">
                    <Advice
                        adviceId={advice ? `Advice #${advice.id}` : "Loading..."}
                        adviceText={advice ? `"${advice.advice}"` : "Please wait..."}
                        loading={loading}
                    />
                </article>

                <picture className="advice-generator__divider" aria-hidden={true}>
                    <source srcSet={dividerImageMobile} media={"(min-width: 48rem)"}/>
                    <img src={dividerImageDesktop} alt=""/>
                </picture>

                <IconButton
                    iconSource={diceIcon}
                    color="green"
                    onClick={fetchAdvice}
                    disabled={loading}
                    aria-label="Get new advice"
                />
            </div>
        </main>
    );
}

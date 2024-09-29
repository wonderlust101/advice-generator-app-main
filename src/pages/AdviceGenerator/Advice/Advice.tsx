import './Advice.scss'

type adviceProps = {
    adviceId: string;
    adviceText: string;
    loading: boolean;
}

export default function Advice({adviceId, adviceText, loading}: adviceProps) {
    return (
        <>
            <h1 className="advice__id">
                {loading ? ("Loading...") : (adviceId)}
            </h1>

            <p className="advice__advice">
                {loading ? ("Please wait...") : (adviceText)}
            </p>
        </>
    )
}
export default function Toptag(props: { text: string }) {
    const heading = props.text;
    return (
        <div className="flex justify-center my-10">
            <div className="rounded-full border-2 border-[#a3e635] inline text-center text-white px-3 py-1 text-sm">
                &#10038; {heading}
            </div>
        </div>
    );
}

import Toptag from "@/components/Toptag";


const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

export default function Introduction() {
    return (
        <section className="py-24">
            <div className="container">
                <Toptag text="✶ INTRODUCING LAYERS" />
                <div>
                    <p className="text-center font-medium">
                        <span className="text-7xl text-center">Your creative process deserves better.</span>
                        <span className="text-7xl text-center pl-3">{text}</span>
                        <span className="text-7xl text-center block text-[#a3e635]">That&apos;s why we build Layers</span>
                    </p>
                </div>
            </div>
        </section>
    );
}

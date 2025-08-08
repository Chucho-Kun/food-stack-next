
export default function Heading({ children }: { children: React.ReactNode }) {
    return (
        <h1 className="text-xl p-2 my-10 bg-amber-900 text-white rounded text-bold text-center">
            {children}
        </h1>
    )
}

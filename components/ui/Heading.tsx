
export default function Heading({ children }: { children: React.ReactNode }) {
    return (
        <h1 className="text-xl p-2 my-10 bg-amber-400">
            {children}
        </h1>
    )
}

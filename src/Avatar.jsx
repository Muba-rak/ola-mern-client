export default function Avatar({ userId }) {
    const colors = ['bg-teal-200','bg-red-200', 'bg-green-200', 'bg-purple-200', 'bg-blue-200', 'bg-yellow-200',  'bg-pink-200', 'bg-indigo-200']
    const useIdBase10 = parseInt(userId, 16)
    const colorImdex = useIdBase10 % colors.length
    const color = colors[colorImdex]
    return (
        <div className={"w-8 h-8 rounded-full flex items-center" + color}>
            <div className="'text-center w-full opacity-70"></div>
        </div>
    )
}
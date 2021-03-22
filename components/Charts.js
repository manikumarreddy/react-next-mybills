import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Charts=({xaxis,yaxis,data,color})=>{
    return(
        <BarChart
            width={400}
            height={250}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 0,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xaxis}/>
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={yaxis} fill={color} />
        </BarChart>
    )
}

export default Charts;
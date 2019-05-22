import React from 'react'
import axios from 'axios'

import { Line } from 'react-chartjs-2'
import { Card } from '../components/Card'
import { Title } from '../components/Title'

class PageTwo extends React.Component {
    state = {
        lineChart: {
            labels: [],
            datasets: [
                
            ]
        }
    }

    componentDidMount = () => {
        this.getData()
    }

    getData = () => {
        axios.get(`https://private-afe609-testefront.apiary-mock.com/time-data`)
        .then(response => {
            const { data } = response
            console.log(data.yesterday)

            this.setState((prevState) => ({
                lineChart: {
                    ...prevState.lineChart,
                    labels: data.today.map(item => item.label),
                    datasets: [
                        {
                            label: 'Today',
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: '#303F9F',
                            borderColor: '#303F9F',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: '#303F9F',
                            pointBackgroundColor: '#FFFFFF',
                            pointBorderWidth: 2,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: '#FFFFFF',
                            pointHoverBorderColor: '#303F9F',
                            pointHoverBorderWidth: 3,
                            pointRadius: 4,
                            pointHitRadius: 10,
                            data: data.today.map(item => item.value)
                        },
                        {
                            label: 'Yesterday',
                            fill: false,
                            lineTension: 0.1,
                            backgroundColor: '#BF3FFF',
                            borderColor: '#BF3FFF',
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            pointBorderColor: '#BF3FFF',
                            pointBackgroundColor: '#FFFFFF',
                            pointBorderWidth: 2,
                            pointHoverRadius: 5,
                            pointHoverBackgroundColor: '#FFFFFF',
                            pointHoverBorderColor: '#BF3FFF',
                            pointHoverBorderWidth: 2,
                            pointRadius: 4,
                            pointHitRadius: 10,
                            data: data.yesterday.map(item => item.value)
                        },
                    ]
                }
            }))
        })
    }
    render() {
        const { lineChart } = this.state
        return(
            <div>
                <Title title="Page 2" />

                <Card title="Line chart 2 data" className="double">
                    <Line
                        data={lineChart}
                    />
                </Card>
            </div>
        )
    }
}

export default PageTwo
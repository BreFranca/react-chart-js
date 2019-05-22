import React from 'react'
import axios from 'axios'
import { Bar, Pie } from 'react-chartjs-2'

import { Card } from '../components/Card'
import { Title } from '../components/Title'

class PageOne extends React.Component {
    state = {
        barChart: {
            labels: [],
            datasets: []
        },
        pieChart: {
            labels: [],
            datasets: []
        },
    }

    componentDidMount = () => {
        this.getData()
    }

    getData = () => {
        axios.get(`https://private-afe609-testefront.apiary-mock.com/anual-result`)
        .then(response => {
            const { data } = response

            this.setState((prevState) => ({
                barChart: {
                    ...prevState.barChart,
                    labels: data.map(item => item.label),
                    datasets: [
                        ...prevState.barChart.datasets,
                        {
                            label: 'BAR CHART',
                            backgroundColor: '#03A9F4',
                            borderColor: '#03A9F4',
                            borderWidth: 1,
                            hoverBackgroundColor: 'rgba(3, 169, 244,0.4)',
                            hoverBorderColor: 'rgba(3, 169, 244,0.4)',
                            data: data.map(item => item.value),
                        }
                    ]
                }
            }))
        })

        axios.get(`https://private-afe609-testefront.apiary-mock.com/anual-percentage`)
        .then(response => {
            const { data } = response

            this.setState((prevState) => ({
                pieChart: {
                    ...prevState.pieChart,
                    labels: data.map(item => item.label),
                    datasets: [
                        ...prevState.pieChart.datasets,
                        {
                            data: data.map(item => item.value),
                            backgroundColor: [
                                '#ABE1FA',
                                '#303F9F',
                                '#2AB92E'
                            ],
                            hoverBackgroundColor: [
                                '#ABE1FA',
                                '#303F9F',
                                '#2AB92E'
                            ]
                        }
                    ]
                }
            }))
        })
    }

    render() {
        const { pieChart, barChart } = this.state
        return(
            <React.Fragment>
                <Title title="Page 1" />
                <div className="flex">
                    <Card title="BARS CHART">
                        <Bar
                            data={barChart}
                            height={230}
                            options={{
                                maintainAspectRatio: true
                            }}
                        />
                    </Card>

                    <Card title="Pie CHART">
                        <Pie
                            data={pieChart}
                        />
                    </Card>
                </div>
            </React.Fragment>
        )
    }
}

export default PageOne
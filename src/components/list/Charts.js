import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const Charts = (props) => {
	const { data } = props
	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)
	let teamAll = []
	let lessThan15Team = []
	let lessThan15Count = []
	let count = 1
	// 先將每個人的球隊抓出來
	for (let v of data) {
		teamAll.push(v.team_name)
	}
	const teamAllSort = teamAll.sort()

	// 計算球隊人數
	for (let i = 0; i < teamAllSort.length; i++) {
		if (teamAllSort[i] === teamAllSort[i + 1]) {
			count = count + 1
		} else {
			if (count <= 15) {
				lessThan15Team.push(teamAllSort[i])
				lessThan15Count.push(count)
			}
			count = 1
		}
	}
	const options = {
		responsive: true,
		options: {
			animation: {
				duration: 1000,
				easing: 'easeOutQuart',
			},
		},
	}
	const chartsData = {
		labels: lessThan15Team,
		datasets: [
			{
				label: 'people',
				data: lessThan15Count,
				backgroundColor: '#b8dfd8',
			},
		],
	}
	// const labels = lessThan15Team
	console.log('lessThan15Team', lessThan15Team)

	return (
		<div>
			<Button variant="primary" onClick={handleShow} className="mx-5 my-3 colorFFF">
				See Charts
			</Button>

			<Modal show={show} onHide={handleClose} className="chart" size="lg">
				<Modal.Header closeButton>
					<Modal.Title>Less than 15</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Bar options={options} data={chartsData} />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	)
}

export default Charts

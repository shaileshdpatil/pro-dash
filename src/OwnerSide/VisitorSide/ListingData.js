import React, { useEffect } from 'react';
import './img/main.css';
import { HeaderNav } from './HeaderNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './img/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from 'axios';
import './Dailog/inquery.css';
// import history from '../../history';
import { useParams } from 'react-router-dom';

const ListingData = () => {
	const [property, setProperty] = React.useState([])
	const [category, setCategory] = React.useState([])
	// const [property, setProperty] = React.useState([])

	const { name } = useParams();

	useEffect(() => {
		propertyData();
		CategoryData();

		 // eslint-disable-next-line
	}, [])

	const propertyData = () => {
		axios.get(`http://localhost:3000/api/searchbycategory/${name}`)
			.then((response) => {
				setProperty(response.data);
			}).catch((error) => {
				console.log(error);
			})
	}

	const CategoryData = () => {
		axios.get('http://localhost:3000/api/categoryDisplay')
			.then((res) => {
				setCategory(res.data);
			}).catch((err) => {
				console.log(err);
			})
	}
	const reloadOnce = () => {
		console.log('patil');
	}

	return (
		<>
			<HeaderNav />
			<div className="header-bottom">
				<div className="container">
					<div className="row">
						<div className="col-sm-9">
							<div className="navbar-header">
								<button type="button" className="navbar-toggle" data-toggle="collapse"
									data-target=".navbar-collapse">
									<span className="sr-only">Toggle navigation</span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
									<span className="icon-bar"></span>
								</button>
							</div>
							<div className="mainmenu pull-left">
								<ul className="nav navbar-nav collapse navbar-collapse">
									<li id="btn"><NavLink to="/visitor/display-HomePage">Home</NavLink></li>
									<li id="btn"><NavLink to="/visitor/Login-owner">Insert a property</NavLink></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>


			<div className="container">
				<div className="row">
					<div className="col-sm-3">
						<div className="left-sidebar">
							<h2>Category</h2>
							<div className="panel-group category-products" id="accordian">
								<div className="panel panel-default">
									{
										category.map((cat) =>
											<div className="panel-heading">
												<h4 className="panel-title">
													<Link to={`/visitor/display-ListingPropertyData/${cat.name}`} data-toggle="collapse" data-parent="#accordian" onClick={reloadOnce}>
														<span className="badge pull-right"></span>
														{cat.name}
													</Link>
												</h4>
											</div>
										)}
								</div>
							</div>
						</div>
					</div>


					<div className="col-sm-9 padding-right">
						<div className="features_items">

							<h2 className="title text-center">Features Items</h2>

							{
								property.map((prope, key) => {
									// window.location.reload()
									return (
										<>
											<div className="col-sm-4 card" key={`${key}-key`} style={{ padding: '5px', height: '350px', margin: '0px' }} >
												<div className="product-image-wrapper">
													<div className="single-products" >
														<div className="productinfo text-center" >
															<Link to={`/visitor/display-property-by-single-page/${prope._id}`}>
																<img src={prope.Images?.url} alt="data9" style={{ height: '150px' }} />
															</Link>

															<p style={{ fontWeight: 'bold', marginTop: '5px', height: '50px', textTransform: 'capitalize' }}>{prope.PropertyName}</p>
															<p style={{ marginTop: '-10px' }} >--------{prope.City}--------</p>
															<h2 style={{ marginTop: '-10px' }} >Rs.{prope.Price}</h2>
															<Link to={`/visitor/display-property-by-single-page/${prope._id}`}>
																<button id="shailuBtn" style={{ width: '100%' }}>View Details</button>
															</Link>
														</div>
													</div>
												</div>
											</div>
										</>
									)
								}
								)
							}
						</div>
					</div>
				</div>
			</div>
			{/* <FooterNav /> */}
		</>
	);
}

export default ListingData;

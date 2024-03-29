import React, { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';
import ProjectDetailsModal from './ProjectDetailsModal';

const Portfolio = ({ classicHeader, darkTheme }) => {
	// init one ref to store the future isotope object
	const isotope = useRef();
	// store the filter keyword in a state
	const [filterKey, setFilterKey] = useState('*');
	const [imagesLoaded, setimagesLoaded] = useState(0);
	const [selectedProjectDetails, setSelectedProjectDetails] = useState();

	const filters = {
		WEB: 'Web',
		PYTHON: 'Python',
	};

	const projectsData = [
		{
			title: 'SWT Mens Grooming',
			projectInfo:
				"SWT Mens Grooming is a bespoke website developed for a modern barber shop in Texas. Created using React and Bootstrap, this single-page application offers smooth navigation with React Router. The design is both sleek and user-friendly, mirroring the shop's high standards and commitment to its customers. Hosted on Firebase for reliability, the site ensures optimal performance across various devices, catering to a broad clientele.",
			client: 'Sally Nuno',
			technologies: 'REACT, BOOTSTRAP',
			industry: 'Beauty and Personal Care',
			date: 'October 2023',
			url: {
				name: 'swt-mens-grooming.web.app/',
				link: 'https://swt-mens-grooming.web.app/',
			},
			socialLinks: {
				facebook: 'http://www.facebook.com/',
				twitter: 'http://www.twitter.com/',
				google: 'http://www.google.com/',
				instagram: 'http://www.instagram.com/',
				mail: 'mailto:example@gmail.com',
			},
			thumbImage: '/images/projects/SWT-Home.png',
			sliderImages: [
				'/images/projects/SWT-Menu.png',
				'/images/projects/SWT-Services.png',
				'/images/projects/SWT-ContactUs.png',
				'/images/projects/SWT-Map.png',
			],
			categories: [filters.WEB],
		},
		{
			title: 'Cardinal Senior Benefits',
			projectInfo:
				'This website was built for a local insurance agency. It was built using React and Bootstrap. It is a single page application that uses React Router to navigate between pages.',
			client: 'Jerome Checketts',
			technologies: 'HTML5, CSS3, BOOTSTRAP, REACT',
			industry: 'Insurance',
			date: 'April 2023',
			url: {
				name: 'github.com/jeromechecketts/FinalExpenseTracker',
				link: 'https://github.com/jeromechecketts/FinalExpenseTracker',
			},
			socialLinks: {
				facebook: 'http://www.facebook.com/',
				twitter: 'http://www.twitter.com/',
				google: 'http://www.google.com/',
				instagram: 'http://www.instagram.com/',
				mail: 'mailto:example@gmail.com',
			},
			thumbImage: '/images/projects/CSB_HomePage.png',
			sliderImages: [
				'/images/projects/CSB_CompaniesPage.png',
				'/images/projects/CSB_ContactPage.png',
			],
			categories: [filters.WEB],
		},
		{
			title: 'Overtime Athletic Management',
			projectInfo:
				'This website was built with and for a friend of mine.  He came up with the idea when he was coaching girls basketball.  He wanted a system to help keep track of his players, equipment, schedules, and more.  We built it using HTML, CSS, Javascript, and Bootstrap.',
			client: 'Joey Bartholomew',
			technologies: 'HTML5, CSS3, Bootstrap, Javascript',
			industry: 'Sports',
			date: 'March 2023',
			url: {
				name: 'github.com/joseph-bartholomew/overtime',
				link: 'https://github.com/joseph-bartholomew/overtime',
			},
			socialLinks: {
				facebook: 'http://www.facebook.com/',
				twitter: 'http://www.twitter.com/',
				google: 'http://www.google.com/',
				instagram: 'http://www.instagram.com/',
				mail: 'mailto:example@gmail.com',
			},
			thumbImage: 'images/projects/Overtime_Home.png',
			sliderImages: [
				'images/projects/Overtime-Product.png',
				'images/projects/Overtime-About.png',
			],
			categories: [filters.WEB],
		},
		// {
		// 	title: 'Nucamp React Webapp with MongoDB',
		// 	projectInfo:
		// 		'The Nucamp Campsite web app is a full-stack, user-friendly platform for exploring, reserving, and reviewing campsites. It features campsite listings, user authentication, reviews and ratings, a reservation system, and an admin dashboard. It was built using React, Node.js, Express.js, and MongoDB.',
		// 	client: 'Jerome Checketts',
		// 	technologies: 'React, Bootstrap, MongoDB, Node.js, Express.js',
		// 	industry: 'Camping',
		// 	date: 'May 20, 2023',
		// 	url: {
		// 		name: 'https://react-deploy-jerome.web.app/',
		// 		link: 'https://react-deploy-jerome.web.app/',
		// 	},
		// 	socialLinks: {
		// 		facebook: 'http://www.facebook.com/',
		// 		twitter: 'http://www.twitter.com/',
		// 		google: 'http://www.google.com/',
		// 		instagram: 'http://www.instagram.com/',
		// 		mail: 'mailto:example@gmail.com',
		// 	},
		// 	thumbImage: 'images/projects/Nucamp-HomePage.png',
		// 	sliderImages: [
		// 		'images/projects/Nucamp-Directory.png',
		// 		'images/projects/Nucamp-About.png',
		// 	],
		// 	categories: [filters.WEB],
		// },
		{
			title: 'Hangman Game',
			projectInfo:
				'The Python Hangman Game is a text-based game that I developed using Python. It provides an interactive and entertaining experience where players attempt to guess a hidden word by suggesting letters. The game includes features such as a random word selection, tracking of correct and incorrect guesses, displaying the progress of the word with correctly guessed letters, and a limit on the number of incorrect guesses before the game ends. It showcases my proficiency in Python programming, string manipulation, and interactive game design.',
			client: 'Jerome Checketts',
			technologies: 'Python',
			industry: 'Games',
			date: 'December 2022',
			url: {
				name: 'github.com/jeromechecketts/hangman',
				link: 'https://github.com/jeromechecketts/hangman',
			},
			socialLinks: {
				facebook: 'http://www.facebook.com/',
				twitter: 'http://www.twitter.com/',
				google: 'http://www.google.com/',
				instagram: 'http://www.instagram.com/',
				mail: 'mailto:example@gmail.com',
			},
			thumbImage: 'images/projects/Hangman-1.png',
			sliderImages: ['images/projects/Hangman-2.png'],
			categories: [filters.PYTHON],
		},
		// {
		// 	title: 'Project Title 5',
		// 	projectInfo:
		// 		'Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.',
		// 	client: 'Ruby Clinton',
		// 	technologies: 'iOS, HTML5, CSS3, PHP, Java',
		// 	industry: 'Art & Design',
		// 	date: 'July 16, 2019',
		// 	url: {
		// 		name: 'www.example.com',
		// 		link: 'https://www.example.com',
		// 	},
		// 	socialLinks: {
		// 		facebook: 'http://www.facebook.com/',
		// 		twitter: 'http://www.twitter.com/',
		// 		google: 'http://www.google.com/',
		// 		instagram: 'http://www.instagram.com/',
		// 		mail: 'mailto:example@gmail.com',
		// 	},
		// 	thumbImage: 'images/projects/project-5.jpg',
		// 	sliderImages: [
		// 		'images/projects/project-1.jpg',
		// 		'images/projects/project-5.jpg',
		// 	],
		// 	categories: [filters.DESIGN],
		// },
	];

	// initialize an Isotope object with configs
	useEffect(() => {
		isotope.current = new Isotope('.portfolio-filter', {
			itemSelector: '.filter-item',
			layoutMode: 'masonry',
		});

		// cleanup
		return () => {
			isotope.current.destroy();
		};
	}, []);

	// handling filter key change
	useEffect(() => {
		if (imagesLoaded) {
			filterKey === '*'
				? isotope.current.arrange({ filter: `*` })
				: isotope.current.arrange({ filter: `.${filterKey}` });
		}
	}, [filterKey, imagesLoaded]);

	const handleFilterKeyChange = (key) => () => setFilterKey(key);

	return (
		<>
			<section
				id='portfolio'
				className={'section ' + (darkTheme ? 'bg-dark-2' : 'bg-light')}
			>
				<div
					className={'container ' + (classicHeader ? '' : 'px-lg-5')}
				>
					{/* Heading */}
					<div className='position-relative d-flex text-center mb-5'>
						<h2
							className={
								'text-24  text-uppercase fw-600 w-100 mb-0 ' +
								(darkTheme
									? 'text-muted opacity-1'
									: 'text-light opacity-4')
							}
						>
							Portfolio
						</h2>
						<p
							className={
								'text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 ' +
								(darkTheme ? 'text-white' : 'text-dark')
							}
						>
							{' '}
							My Work
							<span className='heading-separator-line border-bottom border-3 border-primary d-block mx-auto' />
						</p>
					</div>
					{/* Heading end*/}
					{/* Filter Menu */}
					<ul
						className={
							'portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 ' +
							(darkTheme ? 'nav-light' : '')
						}
					>
						<li className='nav-item'>
							<button
								className={
									'nav-link ' +
									(filterKey === '*' ? 'active' : '')
								}
								onClick={handleFilterKeyChange('*')}
							>
								All
							</button>
						</li>
						{Object.keys(filters).map((oneKey, i) => (
							<li
								className='nav-item'
								key={i}
							>
								<button
									className={
										'nav-link ' +
										(filterKey === filters[oneKey]
											? 'active'
											: '')
									}
									onClick={handleFilterKeyChange(
										filters[oneKey]
									)}
								>
									{filters[oneKey]}
								</button>
							</li>
						))}
					</ul>
					{/* Filter Menu end */}
					<div className='portfolio popup-ajax-gallery'>
						<div className='row portfolio-filter filter-container g-4'>
							{projectsData.length > 0 &&
								projectsData.map((project, index) => (
									<div
										className={
											'col-sm-6 col-lg-4 filter-item ' +
											project.categories.join(' ')
										}
										key={index}
									>
										<div className='portfolio-box rounded'>
											<div className='portfolio-img rounded'>
												<img
													onLoad={() => {
														setimagesLoaded(
															imagesLoaded + 1
														);
													}}
													className='img-fluid d-block portfolio-image'
													src={project.thumbImage}
													alt=''
												/>
												<div className='portfolio-overlay'>
													<a
														className='popup-ajax stretched-link'
														href=''
														onClick={() => {
															setSelectedProjectDetails(
																projectsData[
																	index
																]
															);
														}}
														data-bs-toggle='modal'
														data-bs-target='#exampleModal'
													/>
													<div className='portfolio-overlay-details'>
														<h5 className='text-white fw-400'>
															{project.title}
														</h5>
														<span className='text-light'>
															{project.industry}
														</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								))}
						</div>
					</div>
				</div>
			</section>
			<div className='project-details-modal'>
				{/* Modal */}
				<ProjectDetailsModal
					projectDetails={selectedProjectDetails}
					darkTheme={darkTheme}
				></ProjectDetailsModal>
			</div>
		</>
	);
};

export default Portfolio;

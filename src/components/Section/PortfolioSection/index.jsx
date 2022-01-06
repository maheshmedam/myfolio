import React, {useState} from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import '../../common.sass';
import './style.sass';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import PHeading from '../../PHeading';

const PortfolioSection = ({items, sectionTitle}) => {
	

	return (
		<Row className="wrapper">
			<Col lg={{ size: 3 }}>
				<PHeading heading={sectionTitle} level={2} />
			</Col>
			<Col lg={{ size: 9 }}>
		
			</Col>
		</Row>
	);
}

export default PortfolioSection;
import styles from '../styles/UserDetails.module.css'
import Link from 'next/link'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Charts from './Charts';

const  UserDetails=({primeUser})=>{

    const renderLines=()=>{
        let lines=(primeUser.addOns)?primeUser.addOns:[];
        let lineDetails=lines.forEach((user) => {
            <div>
                <Link href={`/user/${user.id}`}>
                    <a className={styles.card}>
                    <h3>{user.firstName} &rarr;</h3>
                    <p>{user.email}</p>
                    </a>
                </Link>
                <div className='subDivider'></div>
            </div>
        });
        return lineDetails;
    }  
    const returnSlefText=()=>{
        if(primeUser.type === 'primary'){
            return 'My';
        }else{
            return primeUser.firstName;
        }
    }  
    return (         
        <Container fluid={true}>
            <Row className='show-grid'>
                <Col md={12}>
                    <h2>Welcome,{primeUser.firstName} {primeUser.lastName}</h2>
                    <div className='divider'></div>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                <div className="card" style={{width:'100%',margin:'1rem 0'}}>
                    <div className="card-header">
                        {primeUser.type === 'primary' && <h4> My Line</h4>}
                        {primeUser.type !== 'primary' && <h4> {primeUser.firstName}'s Line</h4>}
                        <div>{primeUser.phone}</div>
                        <div className='divider'></div>
                    </div>  
                    <div className="card-body">         
                        <Row>
                            <Col md={12}>
                                <h5>{primeUser.myLine[0].device}</h5>
                                <div>{primeUser.myLine[0].deviceSpec}</div>
                                <div className='subDivider'></div>
                            </Col>     
                        </Row>
                        <Row>
                            <Col md={12}>
                                <h5>Installment Plan</h5>
                                <div>{primeUser.myLine[0].installment} remaining</div>
                                <div className='subDivider'></div>
                            </Col>     
                        </Row>
                        { primeUser.type==="primary" && <Row>
                            <Col md={12}>
                                <h5>Service Provider AddOns</h5>
                                <div>+{primeUser.myLine[0].addOns} addOns</div>
                                <div className='subDivider'></div>
                            </Col>     
                        </Row>}
                        <Row>
                            <Col md={12}>
                                <h5>{primeUser.dataUsage} Data Used</h5>
                                <div>for Unlimited High-Speed</div>
                                <div className='subDivider'></div>
                            </Col>     
                        </Row>
                    </div>
                </div>                
                {primeUser.type === 'primary' && <div className="card" style={{width:'100%'}}>
                    <div className="card-header">
                        <h2>Other Lines & Devices </h2>
                    </div>
                    <div className='divider'></div>
                    <div className="card-body">
                        { primeUser.addOns.map((user,idx) => {
                            return(
                                <div>
                                    <Row>
                                        <Col md={7}>
                                            <h6>{user.firstName},{user.lastName}</h6>
                                            <p>{user.phone}</p>
                                        </Col>
                                        <Col md={5}>
                                            <Link href={`/users/${user.id}`}>
                                                <a>View Details <span>&#187;</span></a>
                                            </Link>                                        
                                        </Col>
                                    </Row>                                
                                    <div className='subDivider'></div>
                                </div>
                            )
                        })}
                    </div>
                </div> }  
            </Col>
            <Col md={6}>
                <div>
                    <div className="card" style={{width:'100%',margin:'1rem 0'}}>
                        <div className="card-header">
                            <h6>Data Usage(in GB) History</h6>
                        </div>
                        <Charts xaxis='month' yaxis='data' data={primeUser.monthlyUsage} color='#0d6efd'></Charts>
                    </div>
                    <div className="card" style={{width:'100%',margin:'1rem 0'}}>
                        <div className="card-header">
                            <h6>Message Count History</h6>
                        </div>
                        <Charts xaxis='month' yaxis='message' data={primeUser.monthlyUsage} color='#8884d8'></Charts>
                    </div>
                    <div className="card" style={{width:'100%',margin:'1rem 0'}}>
                        <div className="card-header">
                            <h6>Calls Usage History</h6>
                        </div>
                        <Charts xaxis='month' yaxis='calls' data={primeUser.monthlyUsage} color='#ec970d'></Charts>
                    </div>
                </div>
            </Col>
            </Row>            
        </Container>        
      )
}

export default UserDetails;
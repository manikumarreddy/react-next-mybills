import {useRouter} from 'next/router';
import Link from 'next/link';
import UserDetails from '../../../components/UserDetails'

const user=({userData})=>{
    return(
        <>            
            {userData && <UserDetails primeUser={userData[0]}></UserDetails>}
            <Link href='/'><button className="btn btn-success"><span>&#171;</span> Back</button></Link>
        </>
    )
}
export const getServerSideProps = async(context)=>{
    const resData= await fetch(`http://localhost:8000/users?id=${context.params.id}`);
    const userData= await resData.json();
    return{
        props:{userData}
      }  
 }
/* We Can make Either the Way
export const getStaticProps= async(context)=>{
    console.log('context.param>>>',context);
    const resData= await fetch(`http://localhost:8000/users?id=${context.params.id}`);
    const userData= await resData.json();
    return{
        props:{userData}
      }  
 }

 export const getStaticPaths = async () => {
    const res = await fetch(`http://localhost:8000/users`)
  
    const users = await res.json()
  
    const ids = users.map((user) => user.id)
    const paths = ids.map((id) => ({ params: { id: id.toString() } }))
  
    return {
      paths,
      fallback: 'blocking'
    }
  }
*/
 export default user;

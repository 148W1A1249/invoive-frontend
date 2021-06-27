import React,{ useState } from "react";
import {InvoiceData} from '../../helpers/controllers';
import easyinvoice from 'easyinvoice';

function Invoice(props){
    const [invoice ,setInvoice] = useState([]);  
    const invoicFun = ()=>{
        InvoiceData({category:props.data})
        .then(res=>{
            console.log(res);
            setInvoice([res.data.user]);  
        })
        .catch((error) => console.log(error)) 
    }
    const downloadInvoice = async (objdata)=>{
        //See documentation for all data properties
        // const data = getSampleData(); 
        const data = {
            "currency": "INR", 
            "taxNotation": "GST",
            "marginTop": 60,
            "marginRight": 45,
            "marginLeft": 45,
            logo: "iVBORw0KGgoAAAANSUhEUgAAA78AAAFrAQMAAAAjHqzJAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAZQTFRFAAAAPK3u1A2o4AAAAAJ0Uk5TAP9bkSK1AAAPR0lEQVR4nO2cTY7cuhGAJQh4yurpBo9HSJZZhTlKdllmm5UpIwsvfYR3kQAjw4ssfYEApuGFl6OBgVgTy2JUfyTVarVa6mk9BGDB9oy7RX4iRVYVi0VlWZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkSf7fRTXGDb8F2H11zjXHc0v3fQTb48GVA2mPB+vfBvxLZhDcHQ12tftNwKV7txFcvczMU+4Tgf97ZYHCnZ/zZb0NbAQso6uE3/G3qodZlo8Y52olvaJ46ukOR+XYX3URdZl2Is1Fbu7c03jRt/Fvn4WSePfIammyNTgCoany0wQC3iuXvxY8lnlmsJMukEIEVlNwKZWugu1F8HjdDwE3AWx9HadgJd16IxgKCNiegM05sBHIbWAYFoOA2wBuZ2BH4JxrXQSHjy+CKwEPY4kulOy4NzzYMrgQ2I1gI+D2j5OS/RK48rXeBJb7d9/eDZOHBPMlPwdWXKC9CfwzVTNe+/WNE4XkwcU5sOZau5vAfNH4o9XOxGCY0+U5sNS7CNb+42Vw7q9xn6WZUrL2/gGBZVRLgZtazE94oEf3cApWZ1rs7/UlwP3o6z0493ECblbA/Q3g4jtd8AxY5z5MSlrvEU3AfhrcBOYLnnr88TlWIFDK3Atc8gXfySBbY6OSLesPZ+8EBu2bc/G4ZCdjfgqWm10G63VwRS0r3Gsqrsj8G67lzuBmBJO3N9ZkQ0lvDqZgUdUjJRC2grFG6HEcXMMrNk9cUoaAjV2fHq1ZcQo+73NdAH8jXwbMk3sWK6GIVPtm6ABGB8xCX/URosGBaH21a2A9gnvRjO7r4MS5pNqYT4Owx39brLWG33skDNlfSiREHLqr8gLYjODO3+GjOwErAVPPVh6cBbAnbAKDw9N68ANjBGy1gGF4kwdgqZU3gnMAW3pUA9rGCbjFDxzdIXsATYDF4GYbuOBxAeAfNMBicOdisMPLXgZcMgla9swDMQL/CGC4otb4tYd1+8EV1wvV5tTdMdgFMDIN/odgxU1ghU4tPcFiEVzTlTSPeQqtgumSJfDYjq8dgXsBh66YgZ0sYK4GNwvg8dony47XZTDOJCcDykVd1mM99RnwsgAQFio4uN87WkKdB8MwfArgegqWVlwLLvlaBD8ReFgGQwiO1ZyEhxbAagUM1TdcK7a2k3pmYHE7Wm/DZ4QNYB09QDcYAHfhlibg/ATMF2K3/7IZbPh7qkqP6wjTr4Ct/64RsDT/enAuRaj4r+N9LIJl+dB4B7G/DHbR0z+VUuaZxuvemHBx5Vhze7A5BfvpzeD8enAVxVqeWSNGYER9F7D2NAHb3eC/yYMYESPprfG9FsBf52AZ4BLw4oF2PTj3X41FNbsBTQAj6rOAqS7oIgEPe1tcDDwnclhCuGiYROD3bmI2QpTAxavJbeDSGeIUvPT9PgVj6X8IuPRgvz5udoIr99DyHdAKppuCsY3FFBwCMoRZAFcr4I+Wf6E1b29m4MGDI4edH0vwEjeClfvY8C9ojF2vJualnIDzANYM7naDPxBYuw7BP6Z2DX3pE3BLBZ1UvAus3SNWOXZdGysFAUNNnQdn4fvqdnDGVcJaD0KZj00EBlQbwIYH8mQi7wIb9yXjempuxPMEPKLsCThqvGPHbzvYuf/gz7G1UMFjfGnFEbwmgLWb/noKzq4Fe6NY0eLkg4uMaMUrlgisCBXqZed+M7iUAppW2L+GFgVwPQUP/p5vAKsQFce9FDUDg9kM4CrqEeLROuoErOGii2DjHi3fPsR/Bz0DlxwFqaWHQlVmEWzgeVwEy+cFRby7NXAxqaoK4K5qtoDzyOY3GQaNT8HFWHQKZh/0J8L4RXoWgd0auJCRAEPIW+QJOB9BAZwLuPQG0Z5x6PF6ACu5zRmYOgj7JpeQTtSTsKvXnoBb/s7KKmQZvOjeFlF9qLzcHGzOghUCihgscc/rwPSzpGHkshAm92BtI7CfpwTOI3C+BZwFR7ZfAqvmHuA/0A8NQ4Z8EH0Krup7gEnoyY0+SA4qZGokQK4CFzvAMjhHi9+vgM21LV5fmGcc2xj7e7T4o+7yM2+9xcWNYO1oc9KWrlNHgg1WjM5Pq0ICygq4nSqQCFxsAaPiqiAOfy3YRSqTpI327NYjAhkHR3P0uprgVqOyhZ8/VaLsc9ineaqz4N2Od/uLDmAXwOSz1mtgNEG1gj8C1lKSIPAxVRaWpgj2XHJHBUwfN+tgcvdGsFxrpuA2i9dOEdjsBpOtq/DibDO43g3Onx0prtGXBeeunoCb+4ELAFt00Ay4mi8E9sUXpfzhSH/0BJbPrwRHO20bwRWBoUL0cY8DY4eNI6wD/0r7SX8deNgPVhigLhA8OtcHgvG6EtfBbWa8VdSXwNGm5nlwvQ7WjpcqLXi7W8HdreCx9rYcwcEqXgSXHrYfbBxvxtoKBncXf74I9gh7GWxXwUbAbfz5IjgKsO0Gw/cd6OvRJNb5tWDBZbeBscho4K4H04e4xtkJRqfBQpW1dmEZtwbmYd3tb3EBQTXcFh+vvR4sKQsr4OYieHiFcydDPeIvvQwO5novGCqjvZgcV25zcHUWTNtF2RJ43R4T2DG4Cu5ZhYHNWnrVcv8+yEyXuwmbNTZ37LK8aWGxl4Ul7xnBp8ux0gkYJA8ruFlB5S7WuypQHkNofTl2orqpru1g6O+ucrEDcnfRAm6riR9wd4FBWSMY1mvmUDCls1hYoR54MAQnBYJhG+Q4MJolnMzNeAf5cWBaywL4NaqexU3Il5ZSsoVgP80eCx5V4F8d7qfZ8jhwhQr3G+1t2eo4sIKxlX+nNDyrjgMbsCcFaUzwug4DS0IOprg2+jBwLuFAzLtszGFgyk9C/XEsuPKBslqh8jofyn950eJV0dbWcWDDWfLfu+z3qDUPAufkN+EscpglcBC48JkceA/HgUvykjU5moPfXL27VNRETY5mfxxYEUnTtvjo+VxcV76gaCIZjENg2Lc5DNwEMIQV6sPAQHIEhgjwMVwAZ7zvVGJG81GqWvscKQB3zv35GG4ZTlLZCsHNYWAJWkEw4vlI/SFhuprAB2nMAMbl09OFpMKXFUUZexUfQHha36J6KTA9VMVJFZ8OA7PGVLwj9+5IcJNRog+AXx/2jMnxyXDPWKM5PgzMkdgWm32cA8LmlzOSusP8gJzAuaMT221+lMrkFuYcC7X52n7vS0nhDypkmKZYHGWOS9mOphMpdXHUNK4E3B8MVjSYIJQIDzo7LPSiJfm+BTBEyQ+axny2WgO4wDSBY8CiqAwlsQD4GP1ReMXVZNja6iBw6Q+a1Bm2tjpoAcNnM0htVOiEHANWNLZKXpvbKAfkvqLl2M/AYH2QqtayPUlr8+ZAcBf4sE482YK5myLjZDWazTC0T3ZC7gY2Yo1bUtVRYgKD76TI/H6h5TnlDgWXnL5LicUHgZtMEparY8F1JopTYw73VFXfEZx5sDljnO4HjjQmLVSn4LuZZ+KIj9nNbMSdweiGoE+gZ+A7mWfRH/3B4Fy8eUmOPg7cZLIbcii4wEHtwfbM4LoPmF50UoqNmDsg9wJXcsTDZqS3Txep93I6q5bAHBSw+aCOASs+WwKPuvromty9rU/A9i5gbQNY4er4y/SCe4ENg0Fj0m7IiYYcwUUzKTG5QImjVGxczp+A65mLNYI1OaA1/r+EEBzYEjSgOeYy1NrO5v8quMH7lpyss2A2IFSxhvguZmDTegcOkDbGZluDVCfgbJaYUMFR65pVDN6A6/AkY12i9w/gT7hvtC2QYGoC98vgLzC1qyhLryVwhbMeErE+0/t+NoH/hP9qDoDYuflVlLimojccBDBngH2hNxzVm8gMblfAhlukGGzwPEVJ4Ec6rrADbFBPAmCmqBRl5Tmu2Hhwo+htPwQ2bldAUHa8mrm+IHAuYBeD8Z0zPecm7dqRlI0nAJ/cN4I7efsO3kBr4EQygI2A3+0D5zi2cjrbevLdFFxMwU7A7+Eo7XYw6UlcsqnTtSGBSzjvTuAKwDnmqWRAZPCwR6mX7PEN+G7TGfgtZOJ0FYWF+gicQzYUgt/AvW0HK14x9ngycioaMp5GalvR6mr81RqH4FFnjX8gPWgEt3vAhj2+sbWz0hpzRBVlmkPgEcHwbgcz3lFP4H+93QeWFWMbzqlGYDjWp2DbEcEWzBXmmwG4IzDMwh3POJcVIyiu+ixYo77A6EwAw+NGMBirZkd8rHD8hhvYaZuDWwTXhsA1gsE7hHFmC0qaVaC7NoNLUcNnpjEYeAS/5oVsrTy4U3jWEJNmYSY3W8GVvP8qWwQbOPGO4AzBFYMbD37YBea3ikQuVARuEOzYD/HgT3AmnMBt/E6DDVKwqh7iHG4R48G4WcLjSMA1n67UbqsjgI0yg+BfzaJpBv0wVMoRGPeZPZjM9fY9FPOBdsxBcf3zLBjf/dZNwV+hy2Pw9gig+0ZniOCcxb+XwbxZglNawRtMLbohHrx9qeOeKbmpO/XWCZwxuCH7iWAN4HHqZgimMzjNdvCPNuOg5sxGBDANQAF37tsJeMc2mRsAN+AB3nPgEsEtgw1oTSNg5cF2Dxj/hdXMArjlyTIF1zF4R3CZE8jdg83yOdgxuA5gSFOBW6lFjwF4O9eDIeF43mFo81p+ggB2Hgw4/RLg+ow5zvCEyhxsTQSu94EL2RyAl33OvkWVYQM4n4LNDeBS9vhGJTIfIgx2Ai7oJIc16NXD6oPAdfb3reCKByy8EmK+xiVdBbmiuL88MLghcB3Ac/uyJmQKMTKv52qPlitjxSVGOyHJnsEwwF8zGI3nVrDmhW8rgYlTME6cpqL4bjUBv/dgW20GG46x2fNgODpR4xiS1/hgPN/ISdiGdsn67UmV/BoVDEbMwIxiDyMCg00JYOV2WAkCY4ebWVlEDSfgAm/ldjA2Ezt8EazYp4rB7PCAqeAD27vAlPc7K0uvZCNwtgLeyM2oixD/8+xLegldJq9rMgweEKw8uNzjc1HEaeEJUQgAK+4I/CBgDAU9Enj6VqUrRWdrYHq5B+dg6wCu4F1eCPav+tkuC0Mjp+EqbzdTbtADGilFR8LeolUOrwh5MXABr4LL+JU16IpG4AICELUPwO4Dvzr/MQQqKXjLW4Gtoh1Xhf0wLtprTuTYmxP1uyVwbegIrsX/T9tFYXaQ/KgU5SRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiS5p/wP/8TL1Q8/lGsAAAAASUVORK5CYII=",
            "sender": {
                "company": "My self Beaware",
                "address": "Sample Street 123",
                "zip": "1234 AB",
                "city": "Vijayawada",
                "country": "India",
                // "custom1": "custom value 1",
                //"custom2": "custom value 2",
                //"custom3": "custom value 3"
            },
            "client": {
                "company": "Client",
                "address": `${objdata.objlist.address}`,
                "zip": `${objdata.objlist.pincode}`,
                "state":  `${objdata.objlist.state}`,
                "country": `${objdata.objlist.country}.`,                
                "custom1":`${objdata.objlist.firstName} ${objdata.objlist.lastName},`,
                "custom2":`${objdata.objlist.category}.`,
                    //"custom2": "custom value 2",
                    //"custom3": "custom value 3"
            },
            "invoiceNumber": "2021.0001",
            "invoiceDate": `${objdata.objlist.dateOfJoining}`,
            "products": [
                {
                    "quantity": "1",
                    "description": "Full Stack Developer",
                    "tax": 6,
                    "price": `${objdata.objlist.fees}`
                },
            ],
            "bottomNotice": "Kindly pay your invoice within 15 days. If you paid please ignore it",
        }; 
        const result = await easyinvoice.createInvoice(data);  
        easyinvoice.download('myInvoice.pdf', result.pdf);
        //	you can download like this as well:
        //	easyinvoice.download();
        //	easyinvoice.download('myInvoice.pdf');  	
    }
    const renderInvoice = async ()=>{
        //See documentation for all data properties
        document.getElementById("pdf").innerHTML = "loading...";
        const data = {}; 
        const result = await easyinvoice.createInvoice(data);      
        easyinvoice.render('pdf', result.pdf);
    }
     
    
    return<>
        <div className="container p-md-5 ">
                {
                    (()=>{
                        if(props.data==="EP" || props.data==="ENP"){
                            return <h3 className="text-center">Employe Invoice Check</h3>
                        }else{
                            return <h3 className="text-center">{props.data} Invoice Check</h3>
                        }
                    })()
                }
            <hr/>
            <div className="text-right mb-3">
                <button type="button" className="btn btn-danger mb-3" onClick={invoicFun}><b>Refresh</b> <i className="fas fa-redo-alt"></i></button>
            </div>

            <div className="table-responsive">
            <table>
                        <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Invoice</th>
                        </tr>
                        {
                            invoice.map(obj=>{
                            let out = obj.map(objlist=>{
                                    return <>
                                    <tr>
                                        <td>{objlist.firstName}</td>
                                        <td>{objlist.lastName}</td>
                                        <td>{objlist.email}</td>
                                        <td>{objlist.mobile}</td>
                                        <td>
                                            <button type="button" className="btn bg-info m-2" onClick={()=>{downloadInvoice({objlist})}}><i class="fas fa-file-download"></i> </button>
                                            <button type="button" className="btn bg-info m-2"> <i class="fas fa-eye"></i></button>
                                        </td>
                                    </tr>
                                    </>
                                })
                                return out;
                            })                               
                        }
                        
                        
                    </table>
                 </div>
                 
        </div>
    </>;
}

export default Invoice;
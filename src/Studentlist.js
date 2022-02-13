import React, { useState } from 'react'
import {useEffect } from 'react';
import { Link } from 'react-router-dom';

function Studentlist() {
    const [students,setStudents] = useState([])
    useEffect(async() => {
     try {
       let studentData =  await fetch("https://61d19a13da87830017e592a4.mockapi.io/Students");
       let studentList = await studentData.json();
       setStudents(studentList)
     } catch (error) {
         console.log(error)
     }
    }, [])
    return (
        <>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 class="h3 mb-0 text-gray-800">Student List</h1>
              <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>
            <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Phone Number</th>
                                            <th>Action</th>
                                            
                                            
                                          
                                           
                                        </tr>
                                    </thead>
                                   
                                    <tbody>
                                        {
                                            students.map((student)=>{
                                                return <tr>
                                                <td>{student.id}</td>
                                                <td>{student.name}</td>
                                                <td>{student.phonenumber}</td>

                                                <td>
                                                    <Link to={`/student/${student.id}`}>
                                                    <button className='btn btn-primary'>View</button>
                                                    </Link>
                                                </td>
                                                
                                            </tr>
                                            })
                                        }
                                        
                                      
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
        </>
    )
}

export default Studentlist

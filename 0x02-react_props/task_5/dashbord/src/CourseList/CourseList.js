import React from 'react'
import CourseListRow from './CourseListRow'

function CourseList() {
    return (
        <table id="CourseList" cellSpacing='0'>
            <thead>
                <CourseListRow textFirstCell='Available courses' isHeader={true} />
                <CourseListRow textFirstCell='Course Name' textSecondCell='Credit' isHeader={true} />
            </thead>
            <tbody>
                {(listCourses.length > 0) ?
                    (listCourses.map(({ id, name, credit }) => (
                        <CourseListRow key={id} textFirstCell={name} textSecondCell={credit} />
                    ))) :
                    (
                        <tr>
                            <td colSpan='2'>
                                No course available yet
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default CourseList
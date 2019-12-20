const TableTemplate = `<div class="container">
<div class="row">
        <div class="col-lg-12">
            <h2 class="text-center">Table Example</h2>
        </div>
        <div class="col-lg-12 text-center" style="margin-top:10px;margin-bottom: 10px;">
            <a class="btn btn-success " href="#"> Add Student</a>
        </div>
    </div>
    <div class="row">
    <table class="table table-bordered">
            <tr>
                <th>No</th>
                <th>Name</th>
                <th>Details</th>
                <th>Birthdate</th>
                <th>Email</th>
                <th width="280px">More</th>
            </tr>
                <tr>
                    <td>1</td>
                    <td>Jhon Doe</td>
                    <td>Example Detail</td>
                    <td>1952-06-25</td>
                    <td>jhon@example.com</td>
                    <td>
                        <form action="#" method="POST">
                            <a class="btn btn-info" href="#">Show</a>
                            <a class="btn btn-primary" href="#">Edit</a>
                            <button type="submit" class="btn btn-danger">Delete</button>
                        </form>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Mary Moe</td>
                    <td>Example Detail</td>
                    <td>1956-12-25</td>
                    <td>mary@example.com</td>
                    <td>
                        <form action="#" method="POST">
                            <a class="btn btn-info" href="#">Show</a>
                            <a class="btn btn-primary" href="#">Edit</a>
                            <button type="submit" class="btn btn-danger">Delete</button>
                        </form>
                    </td>
                </tr>
        </table>
    </div>
</div>
`

export { TableTemplate }
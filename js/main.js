let data = [
        {
            "type": "DD",
            "frequency": "MONTHLY",
            "amount": 27,
            "lastPaymentDate": 'null',
            "lastPaymentAmount": 26.5,
            "nextPaymentDate": "2018-11-27"
        },
        {
            "type": "DD",
            "frequency": "MONTHLY",
            "amount": 27,
            "lastPaymentDate": 'null',
            "lastPaymentAmount": 26.5,
            "nextPaymentDate": "2018-12-28"
        },
        {
            "type": "DD",
            "frequency": "MONTHLY",
            "amount": 27,
            "lastPaymentDate": 'null',
            "lastPaymentAmount": 26.5,
            "nextPaymentDate": "2019-01-29"
        }
    ];

data.map((item,index) => {
	$('tbody').append(`<tr><td>${index + 1}</td><td>${item.type}</td><td>${item.frequency}</td><td>${item.amount}</td><td>${item.lastPaymentDate}</td><td>${item.lastPaymentAmount}</td><td>${item.nextPaymentDate}</td></tr>`)
});

$('.add').on('click',()=>{
	$('tbody').append(`<tr><td>${$('tbody tr').length + 1}</td><td>DD</td><td>Daily</td><td>100</td><td>322</td><td>311</td><td>35-11-2033</td></tr>`)
});

$('.delete').on('click',() => {
	$('tbody tr:last').remove();
});
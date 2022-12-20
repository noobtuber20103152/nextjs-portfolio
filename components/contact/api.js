const [data, setdata] = useState({ name: "", email: "", phone: "", message: "" });
const [message, setmessage] = useState('Send Message')
const onchange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })
}
const [sending, setsending] = useState(false);
const submit = () => {
    setsending(true);
    fetch("/api/contact", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json()).then(response => {
        console.log(response);
        if (response.status == 200) {
            setmessage('Message Send Successfull')
            setsending(false);
            setTimeout(() => {
                setmessage('Send Message');
                setdata({ name: "", email: "", phone: "", message: "" });
            }, 3000);

        }
        else {
            console.log("Error");
        }
    })
}
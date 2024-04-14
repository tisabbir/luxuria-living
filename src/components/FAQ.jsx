

const FAQ = () => {
    return (
        <div className=' bg-gray-100'>
            <section className=" max-w-6xl mx-auto mt-12 text-gray-800">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
		<p className="mt-4 mb-8 text-gray-500">Explore answers to common questions about our product/service. Can not find what you need? Contact support for assistance.</p>
		<div className="space-y-4">
			<details className="w-full border border-gray-500 rounded-lg" open="">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How can I search for luxury properties on Luxuria Living?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-500">To discover exquisite luxury properties, navigate to the Properties section on Luxuria Livings website. Utilize our advanced search filters to refine your options by location, price range, property type, and amenities. Explore our curated collection of opulent estates and find your perfect haven today! </p>
			</details>
			<details className="w-full border border-gray-500 rounded-lg" open="">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What services does Luxuria Living offer to property buyers and sellers?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-500">Luxuria Living offers an array of tailored services to cater to both discerning property buyers and sellers. For buyers, our dedicated team provides personalized property search assistance, expert guidance throughout the purchasing journey, and exclusive access to premium listings. For sellers, we deliver comprehensive marketing strategies, bespoke property promotion campaigns, and unparalleled support in showcasing your property to qualified buyers. </p>
			</details>
			<details className="w-full border border-gray-500 rounded-lg" open="">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How can I contact Luxuria Living for further assistance or inquiries?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-500">We are committed to providing exceptional service and assistance to our valued clients. Contact Luxuria Living today via phone at +1 555 123-4567, email at info@luxurialiving.com, or by filling out the contact form on our website. Whether you have inquiries about a specific property, require guidance with your search, or wish to learn more about our services, our dedicated team is here to address all your luxury real estate needs with professionalism and expertise. </p>
			</details>
		</div>
	</div>
</section>
        </div>
    );
};

export default FAQ;
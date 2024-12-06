function Header() {
	return (
		<>
			<header className="p-2 border-b bg-white shadow flex justify-between items-center mb-10">
				<img
					className="rounded-xl w-8 md:w-12"
					src="https://img.icons8.com/color/48/typescript.png"
					alt="Imagen de registro"
				/>
				<div className="flex justify-center items-center">
					<h1 className="p-6 text-xl md:text-3xl font-bold text-center">ㅤㅤㅤㅤMenu 🍲🍺</h1>
				</div>

				<a href="/" className="text-xl md:text-3xl font-black">Food-menu</a>
			</header>
		</>
	);
}

export default Header;

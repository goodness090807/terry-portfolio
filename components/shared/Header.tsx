import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className="w-full border-b z-10">
            <div className="wrapper flex-between">
                <Link href={"/"} className="flex items-center w-48 gap-3">
                    <Image src={"/logo.svg"} className="h-[38px]" alt="蔡家誠的Logo" width={48} height={38} />

                    <span className="font-bold text-xl tracking-widest text-gray-700">嗨!我是家誠</span>
                </Link>
            </div>
        </header>
    );
};

export default Header;

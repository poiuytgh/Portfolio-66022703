import Image from "next/image";

export default function PortfolioPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-black flex items-center justify-center px-6"
      style={{ backgroundImage: "url('/image/bghonkai02.jpeg')" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl p-8 bg-white bg-opacity-80 rounded-2xl shadow-2xl">
        {/* Left Column */}
        <div className="space-y-10">
          {/* Profile Section */}
          <div className="text-center">
            <div className="relative w-40 h-40 mx-auto">
              <Image
                src="/image/pluem1.png"
                alt="Profile Picture"
                layout="fill"
                objectFit="cover"
                className="rounded-full shadow-lg border-4 border-purple-500"
              />
            </div>
            <h1 className="text-4xl font-extrabold mt-4 text-purple-600">
              Thuwanon Najai
            </h1>
          </div>

          {/* Education Section */}
          <div className="p-8 bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-500 rounded-xl shadow-lg text-white">
            <h2 className="text-3xl font-bold mb-4">ประวัติการศึกษา</h2>
            <p className="text-xl font-semibold">มหาวิทยาลัยพะเยา</p>
            <p className="mt-2">คณะเทคโนโลยีสารสนเทศและการสื่อสาร</p>
            <p className="mt-1">สาขาวิศวกรรมซอฟต์แวร์</p>
            <p className="mt-4 text-gray-200">เข้าศึกษาเมื่อปี 2023-ปัจจุบัน</p>
          </div>

          {/* Skills Section */}
          <div className="p-8 bg-gradient-to-br from-teal-500 via-green-400 to-blue-500 rounded-xl shadow-lg text-white">
            <h2 className="text-3xl font-bold mb-4">ทักษะด้านการเขียนโปรแกรม</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Programming Language: JavaScript, Python</li>
              <li>Web Development: HTML, CSS,</li>
              <li>Tool : Figma</li>
              <li>Team Collaboration</li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-start space-y-10">
          {/* About Me Section */}
          <div className="p-8 bg-gradient-to-br from-purple-600 via-pink-500 to-red-400 rounded-xl shadow-lg text-white">
            <h2 className="text-3xl font-bold mb-4">ข้อมูลเกี่ยวกับฉัน</h2>
            <p>
              สวัสดีครับ ผมชื่อ นาย ธุวานนท์ นาใจ กําลังศึกษาอยู่ชั้นปีที่ 2 มหาวิทยาลัยพะเยา
              ผมเป็นคนง่ายๆ ชอบนอนเป็นกิจวัตรประจําวัน งานอดิเรกของผมคือ เป็นคนชอบอ่านนิยาย
              วาดรูปการ์ตูน อาชีพที่ผมใฝ่ฝันที่อยากเป็น คือ การเลือกที่จะทำอาชีพ QA (Quality Assurance)
              เพราะว่าผมมีความสนใจในการตรวจสอบรายละเอียดและมองหาโอกาสในการพัฒนา...
            </p>
          </div>

          {/* Projects Section */}
          <div className="p-8 bg-gradient-to-br from-orange-500 via-yellow-400 to-pink-500 rounded-xl shadow-lg text-white">
            <h2 className="text-3xl font-bold mb-4">ผลงานประสบการณ์</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>อบรม "หัวข้อการใช้ framework ในการพัฒนาซอฟต์แวร์ส่วนหน้า"</li>
              <li>ทําโปรเจ็คเกี่ยวกับ "Novelvers" รวมนิยาย</li>
              <li>ทําโปรเจ็คเกี่ยวกับ "เว็บไซต์ซื้อ ขาย art-toy"</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="p-8 bg-gradient-to-br from-blue-600 via-teal-500 to-green-400 rounded-xl shadow-lg text-white">
            <h2 className="text-3xl font-bold mb-4">ข้อมูลติดต่อ</h2>
            <p>Facebook: Thuwanon Najai</p>
            <p>Instagram: aaicwed</p>
            <p>Email: 66022703@up.ac.th</p>
            <p>Phone: 082-331-0162</p>
          </div>
        </div>
      </div>
    </div>
  );
}

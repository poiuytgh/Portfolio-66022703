import Image from "next/image";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 via-blue-300 to-blue-200 text-black flex items-center justify-center px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl p-8 bg-white rounded-xl shadow-lg">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Profile Section */}
          <div className="text-center">
            <div className="relative w-40 h-40 mx-auto">
              <Image
                src="/image/pluem1.png"
                alt="Profile Picture"
                layout="fill"
                objectFit="cover"
                className="rounded-full shadow-md"
              />
            </div>
            <h1 className="text-3xl font-bold mt-4">Thuwanon Najai</h1>
          </div>

          {/* Education Section */}
          <div className="p-6 bg-blue-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">ประวัติการศึกษา</h2>
            <p className="text-xl font-semibold">มหาวิทยาลัยพะเยา</p>
            <p className="mt-2">คณะเทคโนโยีสารสนเทศและการสื่อสาร</p>
            <p className="mt-1">สาขาวิศวกรรมซอฟต์แวร์</p>
            <p className="mt-4 text-gray-600">เข้าศึกษาเมื่อปี 2023-ปัจจุบัน</p>
          </div>

          {/* Skills Section */}
          <div className="p-6 bg-blue-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">ทักษะ</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Programming Language: JavaScript, Python</li>
              <li>Web Development: HTML, CSS, React, Next.js</li>
              <li>Team Collaboration & Problem Solving</li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-start mt-24 space-y-8">
          {/* Top Section */}
          <div className="space-y-8">
            {/* About Me Section */}
            <div className="p-6 bg-blue-50 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">ข้อมูลเกี่ยวกับฉัน</h2>
              <p>
              สวัสดีครับ ผมชื่อ นาย ธุวานนท์ นาใจ กําลังศึกษาอยู่ชั้นปีที่ 2 มหาวิทยาลัยพะเยา
              ผมเป็นคนง่ายๆ ชอบนอนเป็นกิจวัตรประจําวัน งานอดิเรกของผมคือ เป็นคนชอบอ่านนิยาย
              วาดรูปการ์ตูน อาชีพที่ผมใฝ่ฝันที่อยากเป็น คือ การเลือกที่จะทำอาชีพ QA (Quality Assurance) 
              เพราะว่าผมมีความสนใจในการตรวจสอบรายละเอียดและมองหาโอกาสในการพัฒนา 
              และปรับปรุงสิ่งที่มีอยู่ให้ดียิ่งขึ้น การทำงานในสาย QA จะช่วยให้ผมได้ใช้ทักษะในการวิเคราะห์และแก้ไขปัญหา 
              ซึ่งตรงกับความชอบในการหาความผิดพลาดและหาวิธีปรับปรุงคุณภาพในกระบวนการต่างๆ 
              นอกจากนี้ QA ยังเป็นอาชีพที่ท้าทายและมีการพัฒนาต่อเนื่อง ซึ่งผมชอบการเรียนรู้สิ่งใหม่ๆ 
              และทำงานที่สามารถมีส่วนช่วยในการพัฒนาผลิตภัณฑ์และบริการให้มีคุณภาพสูงขึ้น.
              </p>
            </div>

            {/* Projects Section */}
            <div className="p-6 bg-blue-50 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">ผลงานประสบการณ์</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>อบรม "หัวข้อการใช้ framework ในการพัฒนาซอฟต์แวร์ส่วนหน้า"</li>
                <li>ทําโปรเจ็คเกี่ยวกับ "Novelvers" รวมนิยาย</li>
                <li>ทําโปรเจ็คเกี่ยวกับ "เว็บไซต์ซื้อ ขาย art-toy"</li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="p-6 bg-blue-50 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">ข้อมูลติดต่อ</h2>
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

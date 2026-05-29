/**
 * ═══════════════════════════════════════════════════════════════
 *  RESUME BASIC — Thông tin BẮT BUỘC của CV (in / PDF / DOCX)
 *  • Header, kỹ năng, mục tiêu, học vấn, kinh nghiệm, dự án, hoạt động…
 *  • Chỉ nhập tiếng Việt — bấm English trên web để dịch
 *  Hướng dẫn: src/huongdan.md
 * ═══════════════════════════════════════════════════════════════
 */

import type { CVData } from "@/resume-types";

export const basic: CVData = {
  header: {
    fullName: "Nguyễn Thị Thu Thảo",
    position: " Thiết kế hình ảnh",
    tagline:
      "(Thu Thảo) · Sinh 12/04/2009 — Graphic Designer, tư duy sáng tạo hiện đại, thiết kế visual đa nền tảng và xây dựng thương hiệu cá nhân.",
    highlights: [
      "Graphic Design",
      "Content Creator",
      "Social Media Branding",
      "Visual Storytelling",
      "Ubuntu Server",
    ],
    phone: "0813 049 748",
    email: "nguyenthithuthaotqtudla@gmail.com",
    address: "Tây Ninh, Việt Nam",
    portfolio: "https://github.com/thuthao",
    facebook: "https://www.facebook.com/share/18fAtw6DtP/",
    zalo: "https://zalo.me/0813049748",
  },

  creativeSkills: {
    design: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "CorelDRAW",
      "Canva",
      "Lightroom",
      "Banner · Poster · Thumbnail",
      "Social Media Visual",
      "Nhận diện thương hiệu cá nhân",
      "Chỉnh màu & retouch",
    ],
    content: [
      "Nội dung TikTok · Instagram · Facebook",
      "Biên tập video ngắn (CapCut)",
      "Facebook Ads visual",
      "Storytelling & ý tưởng nội dung",
      "Tối ưu theo xu hướng MXH",
    ],
    software: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "CorelDRAW",
      "Canva",
      "Lightroom",
      "CapCut",
    ],
    media: ["TikTok", "Instagram", "Facebook", "Facebook Ads", "CapCut"],
  },

  certifications: [],

  languages: [{ name: "Tiếng Việt", level: "Bản ngữ" }],

  careerObjective:
    " Graphic Designer với tư duy sáng tạo hiện đại, tập trung thiết kế hình ảnh truyền thông, xây dựng thương hiệu cá nhân và phát triển nội dung đa nền tảng. Có kinh nghiệm thiết kế visual cho Facebook, TikTok, Instagram; xây dựng nội dung thẩm mỹ cao, tối ưu tương tác và bắt trend. Thành thạo công cụ thiết kế/chỉnh sửa hình ảnh–video, phát triển ý tưởng từ concept đến sản phẩm hoàn chỉnh. Phong cách linh hoạt, chú trọng thẩm mỹ, hướng tới sản phẩm truyền thông nổi bật và chuyên nghiệp.",

  education: [

    {
      school: "Trường Trung Cấp Công Nghệ Và Du Lịch",
      period: "2024 – 2026",
      detail:
        "Phát triển bản thân và định hướng mục tiêu tương lai.",
    },
    {
      school: "Trường THCS Trần Phú",
      period: "2020 – 2024",
      detail:
        "Rèn luyện kỹ năng , tự tin tham gia các hoạt động tập thể.",
    },
    {
      school: "Trường TH An Vĩnh Ngãi",
      period: "2015 – 2020",
      detail:
        "Năng động học tập và khám phá sở thích bản thân.",
    },
  ],

  experience: [
    {
      company: "Trường Cao đẳng Công nghệ và Du lịch",
      role: "Giảng viên",
      period: "2024 – Hiện tại",
      bullets: [
        "Hướng dẫn và hỗ trợ sinh viên trong hoạt động sáng tạo, kỹ năng thực hành và tư duy làm việc thực tế.",
        "Đồng hành sinh viên trong dự án truyền thông, kỹ năng mềm và định hướng nghề nghiệp.",
      ],
    },
    {
      company: "Freelance / Personal Brand",
      role: "Content Creator & Graphic Designer",
      period: "2023 – nay",
      bullets: [
        "Thiết kế hình ảnh truyền thông cho mạng xã hội; sản xuất visual TikTok, Instagram, Facebook.",
        "Thiết kế banner, poster, thumbnail và social media branding.",
        "Chỉnh sửa ảnh/video phục vụ truyền thông quảng bá; xây dựng concept hiện đại, tối giản, bắt trend.",
      ],
    },
  ],

  projects: [
    {
      name: "Freelance — Công việc nổi bật",
      role: "Content Creator & Graphic Designer",
      period: "2023 – nay",
      tools: ["Photoshop", "Illustrator", "CapCut", "Canva", "Facebook Ads"],
      summary:
        "Sản xuất visual và nội dung marketing online cho thương hiệu cá nhân và khách hàng freelance.",
      bullets: [
        "Thiết kế social post và visual quảng cáo.",
        "Xây dựng nội dung video ngắn.",
        "Thiết kế hình ảnh thương hiệu cá nhân.",
        "Chỉnh màu và tối ưu hình ảnh truyền thông.",
        "Sáng tạo nội dung phục vụ marketing online.",
      ],
      portfolioUrl: "https://github.com/ZakShinn",
    },
  ],

  activities: [
    {
      title: "Sở thích",
      description:
        "Tìm hiểu AI và công nghệ mới ; sáng tạo bằng công nghệ ; học các mẹo công nghệ hữu ích ; xem review đồ công nghệ.",
    },
    {
      title: "Điểm mạnh cá nhân",
      description:
        "Biết sáng tạo nội dung số ; khả năng tự học tốt ;thích nghi nhanh với môi trường số ;linh hoạt khi dùng ứng dụng mới.",
    },
    {
      title: "Hoạt động — Cao đẳng LADEC",
      period: "2016 – 2019",
      description:
        "Tham gia phong trào và quản lý nhóm thanh niên tình nguyện; rèn luyện kỹ năng lãnh đạo và làm việc nhóm.",
    },
    {
      title: "Định hướng phát triển",
      description:
        "Become a creative and adaptable person in the digital era.",
    },
  ],
};

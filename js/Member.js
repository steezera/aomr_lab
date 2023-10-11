// function Person(name, curr, major, email, phone, link){
//     this.name = name;
//     this.curr = curr;
//     this.major = major;
//     this.email = email;
//     this.phone = phone;
//     this.link = link;
// }

var member_num = 5;
var person_name =   ['이의인'    ,'이의인'   ,'이의인'   ,'이의인'   ,'이의인'       ];
var person_curr =   ['학부연구생' ,'학부연구생','학부연구생','학부연구생','학부연구생'     ];
var person_major=   ['연구분야'   ,'연구분야'  ,'연구분야'  ,'연구분야'  ,'연구분야'    ];
var person_email=   ['dldmldls77@gmail.com'
,'dldmldls77@gmail.com'
,'dldmldls77@gmail.com'
,'dldmldls77@gmail.com'
,'dldmldls77@gmail.com'
];
var person_phone=   ['010-2383-7702'
,'010-2383-7702'      
,'010-2383-7702'      
,'010-2383-7702'      
,'010-2383-7702'];
var person_link =   ['http://itempage3.auction.co.kr/DetailView.aspx?itemno=A602688703',
'http://itempage3.auction.co.kr/DetailView.aspx?itemno=A602688703',
'http://itempage3.auction.co.kr/DetailView.aspx?itemno=A602688703',
'http://itempage3.auction.co.kr/DetailView.aspx?itemno=A602688703',
'http://itempage3.auction.co.kr/DetailView.aspx?itemno=A602688703'
];

var card_placeholder = document.querySelector('.card-placeholder.students');
for(var i=0;i<member_num;i++){
    let link = null
    if(person_link[i] != null){
        link = '소개페이지';
    }else{
        link="";
    }
    card_placeholder.innerHTML += `
    <div class="member-card">
                    <!-- 사진 들어가는자리, 그 안에 사진 -->
                    <div class="member-card-photoplace">
                        <img src="./image/member-photo/${person_name[i]}.png" 
                        alt="${person_name[i]}" 
                        class="member-card-photo">
                    </div>
                    <!-- 이름, 과정, 연구분야, 구글 스칼라, 실적들어가는 자리 -->
                    <div class="member-card-introduce">
                        <div class="member-card-introduce-name">
                            <p>${person_name[i]}
                                <span class="member-card-introduce-curriculum">
                                    .${person_curr[i]}
                                </span>
                            </p>
                        </div>

                        <div class="member-card-introduce-other major">
                            ${person_major[i]}
                        </div>
                        <div class="member-card-introduce-other">
                            ${person_email[i]}
                        </div>
                        <div class="member-card-introduce-other">
                            ${person_phone[i]}
                        </div>
                        <div class="member-card-introduce-other">
                            <a 
                            href="${person_link[i]}"
                            class="link"
                            target="_blank">
                            ${link}
                            </a>
                        </div>
                        
                    </div>
                    

                </div>
    `
}
// ========================================
// نسيج الأصالة - Interactive JavaScript
// ========================================

// Product Data
const productsData = {
    1: {
        title: "منسوج صوفي تقليدي",
        description: "نسيج صوفي يدوي فاخر بزخارف هندسية تراثية بألوان ترابية دافئة. منسوج بحرفية عالية من صوف طبيعي 100%.",
        price: "850 ر.س",
        features: [
            "صناعة يدوية 100%",
            "صوف طبيعي عالي الجودة",
            "زخارف هندسية تقليدية",
            "ألوان ثابتة لا تبهت"
        ],
        dimensions: "150 × 200 سم",
        weight: "2.5 كجم",
        image: "images/wool_textile_1_1767285568398.png"
    },
    2: {
        title: "بطانية صوفية فاخرة",
        description: "بطانية منسوجة يدوياً بأنماط قبلية أصيلة بألوان غنية ونابضة بالحياة. قطعة فنية تجمع بين الدفء والجمال.",
        price: "1,200 ر.س",
        features: [
            "نسيج كثيف ودافئ",
            "أنماط قبلية أصيلة",
            "مقاومة للتآكل",
            "سهلة العناية والتنظيف"
        ],
        dimensions: "180 × 220 سم",
        weight: "3.2 كجم",
        image: "images/wool_textile_2_1767285583191.png"
    },
    3: {
        title: "سجادة يدوية فاخرة",
        description: "سجادة حرفية بتصاميم هندسية عربية راقية بألوان الصحراء الدافئة. قطعة مميزة تضيف لمسة من الفخامة.",
        price: "2,500 ر.س",
        features: [
            "نسيج محكم ومتين",
            "تصاميم هندسية معقدة",
            "مثالية للمجالس العربية",
            "مقاومة للبقع"
        ],
        dimensions: "200 × 300 سم",
        weight: "8.5 كجم",
        image: "images/wool_textile_3_1767285596799.png"
    },
    4: {
        title: "شال صوفي منقوش",
        description: "شال فاخر منسوج بألوان الجواهر وزخارف أنيقة تعكس الأصالة والرقي. مثالي للمناسبات والإطلالات اليومية.",
        price: "650 ر.س",
        features: [
            "خفيف ودافئ",
            "زخارف راقية",
            "ألوان جواهرية فاخرة",
            "متعدد الاستخدامات"
        ],
        dimensions: "70 × 200 سم",
        weight: "0.4 كجم",
        image: "images/wool_textile_4_1767285611300.png"
    },
    5: {
        title: "أغطية وسائد منسوجة",
        description: "أغطية وسائد زخرفية بأنماط شعبية نابضة بالألوان الزاهية. تضيف لمسة من الحيوية والتراث لمنزلك.",
        price: "350 ر.س",
        features: [
            "تصاميم شعبية أصيلة",
            "ألوان زاهية ومبهجة",
            "نسيج عالي الجودة",
            "سحاب مخفي أنيق"
        ],
        dimensions: "45 × 45 سم (للواحدة)",
        weight: "0.3 كجم",
        image: "images/wool_textile_5_1767285624837.png"
    },
    6: {
        title: "سجادة صلاة فاخرة",
        description: "سجادة صلاة بزخارف إسلامية هندسية راقية وجودة متحفية. قطعة روحانية تجمع بين الجمال والوظيفة.",
        price: "1,800 ر.س",
        features: [
            "زخارف إسلامية راقية",
            "نعومة وراحة فائقة",
            "قابلة للطي والحمل",
            "هدية مثالية"
        ],
        dimensions: "70 × 110 سم",
        weight: "1.2 كجم",
        image: "images/wool_textile_6_1767285640688.png"
    }
};

// ========== Mobile Menu Toggle ==========
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// ========== Smooth Scrolling ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========== Active Navigation Link ==========
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ========== Product Filtering ==========
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        productCards.forEach(card => {
            if (filterValue === 'all') {
                card.style.display = 'block';
                // Animate in
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                const category = card.getAttribute('data-category');
                if (category === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            }
        });
    });
});

// ========== Product Details Modal ==========
const modal = document.getElementById('productModal');
const modalBody = document.getElementById('modalBody');

function showProductDetails(productId) {
    const product = productsData[productId];
    if (!product) return;
    
    const featuresHTML = product.features.map(feature => 
        `<li><span class="feature-check">✓</span> ${feature}</li>`
    ).join('');
    
    modalBody.innerHTML = `
        <div class="modal-product">
            <div class="modal-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="modal-details">
                <h2 class="modal-title">${product.title}</h2>
                <p class="modal-price">${product.price}</p>
                <p class="modal-description">${product.description}</p>
                
                <div class="modal-section">
                    <h3>المميزات:</h3>
                    <ul class="features-list">
                        ${featuresHTML}
                    </ul>
                </div>
                
                <div class="modal-specs">
                    <div class="spec-item">
                        <strong>الأبعاد:</strong>
                        <span>${product.dimensions}</span>
                    </div>
                    <div class="spec-item">
                        <strong>الوزن:</strong>
                        <span>${product.weight}</span>
                    </div>
                </div>
                
                <div class="modal-actions">
                    <button class="btn btn-primary" onclick="orderProduct(${productId})">اطلب الآن</button>
                    <button class="btn btn-secondary" onclick="closeModal()">إغلاق</button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal-specific styles
    addModalStyles();
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function orderProduct(productId) {
    const product = productsData[productId];
    alert(`شكراً لاهتمامك بـ "${product.title}"!\n\nللطلب، يرجى التواصل معنا عبر:\n📞 الهاتف: +966 50 123 4567\n📧 البريد: info@naseejalasala.sa`);
    closeModal();
}

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ========== Add Modal Styles Dynamically ==========
function addModalStyles() {
    if (document.getElementById('modal-dynamic-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'modal-dynamic-styles';
    style.textContent = `
        .modal-product {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
        }
        
        .modal-image img {
            width: 100%;
            height: auto;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        
        .modal-title {
            font-family: var(--font-heading);
            color: var(--color-primary);
            margin-bottom: 1rem;
        }
        
        .modal-price {
            font-family: var(--font-heading);
            font-size: 2rem;
            color: var(--color-accent-1);
            font-weight: 700;
            margin-bottom: 1rem;
        }
        
        .modal-description {
            color: var(--color-text-secondary);
            line-height: 1.8;
            margin-bottom: 1.5rem;
        }
        
        .modal-section {
            margin-bottom: 1.5rem;
        }
        
        .modal-section h3 {
            font-family: var(--font-heading);
            color: var(--color-primary);
            margin-bottom: 0.75rem;
            font-size: 1.25rem;
        }
        
        .features-list {
            list-style: none;
            padding: 0;
        }
        
        .features-list li {
            padding: 0.5rem 0;
            color: var(--color-text-secondary);
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .feature-check {
            color: var(--color-secondary);
            font-weight: bold;
            font-size: 1.25rem;
        }
        
        .modal-specs {
            background: var(--color-bg-secondary);
            padding: 1rem;
            border-radius: 8px;
            margin-bottom: 1.5rem;
        }
        
        .spec-item {
            display: flex;
            justify-content: space-between;
            padding: 0.5rem 0;
            color: var(--color-text-secondary);
        }
        
        .spec-item strong {
            color: var(--color-primary);
        }
        
        .modal-actions {
            display: flex;
            gap: 1rem;
        }
        
        .modal-actions .btn {
            flex: 1;
        }
        
        @media (max-width: 768px) {
            .modal-product {
                grid-template-columns: 1fr;
            }
            
            .modal-actions {
                flex-direction: column;
            }
        }
    `;
    document.head.appendChild(style);
}

// ========== Contact Form ==========
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // In a real application, this would send data to a server
        alert(`شكراً ${name}!\n\nتم استلام رسالتك بنجاح. سنتواصل معك قريباً على البريد الإلكتروني: ${email}`);
        
        contactForm.reset();
    });
}

// ========== Scroll Animations ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.feature-card, .product-card, .contact-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

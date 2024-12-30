import React from "react";
import OrderPage from "../../components/OrderPage";

describe("inputa bir metin giren test", () => {
  it("inputa metin mi yazılıyor", () => {
    // React bileşenini mount ediyoruz:
    cy.mount(<OrderPage />);

    // Input alanına metin giriyoruz:
    cy.get('input[name="name"]') // 'name' adında bir input elemanını seçtik..
      .type("John Doe") // "John Doe" metnini inputa yazdık..
      .should("have.value", "John Doe"); // Girilen değerin doğru olduğunu kontrol ediyoruz..
  });
});

describe("birden fazla malzeme seçilebilen bir test", () => {
  it("1den fazla malzeme seçilebiliyor mu", () => {
    // React bileşenini mount et
    cy.mount(<OrderPage />);

    // Malzeme seçimi yapıyoruz:
    cy.get('input[type="checkbox"][value="Pepperoni"]') // Pepperoni seçtik
      .check() // Kutuyu işaretle demek..
      .should("be.checked"); // Kutunun işaretli olduğunu doğruluyoruz...

    cy.get('input[type="checkbox"][value="Domates"]') // Domates seçtik
      .check() // Kutuyu işaretle demek..
      .should("be.checked"); // Kutunun işaretli olduğunu doğruluyoruz...

    cy.get('input[type="checkbox"][value="Kabak"]') // Kabak seçtik
      .check() // Kutuyu işaretle demek..
      .should("be.checked"); // Kutunun işaretli olduğunu doğruluyoruz...

    // Seçilen malzemelerin doğruluğunu kontrol ettiriyoruz:
    cy.get('input[type="checkbox"][value="Pepperoni"]').should("be.checked");
    cy.get('input[type="checkbox"][value="Domates"]').should("be.checked");
    cy.get('input[type="checkbox"][value="Kabak"]').should("be.checked");
  });
});

describe("formu gönderen bir test", () => {
  it("seçilen neyse ona göre form gönderilcek mi/gönderilmicek mi?", () => {
    // React bileşenini mount et
    cy.mount(<OrderPage onSubmit={cy.stub()} />);

    // Ad soyad inputunu dolduruyoruz:
    cy.get('input[name="name"]')
      .type("John Doe")
      .should("have.value", "John Doe"); // Girilen değerin doğru olduğunu kontrol ediyoruz..

    // Hamur kalınlığı seçiyoruz:
    cy.get('select[name="hamur"]')
      .select("İnce Hamur") // ince hamur seçtik
      .should("have.value", "İnce Hamur"); //girilen değer uyuşşuyor mu diye kontrol ediyoruz..

    // Boyut seçiyoruz:
    cy.get('input[type="radio"][value="Orta"]') // Orta seçtik..
      .check()
      .should("be.checked"); //girilen değer uyuşşuyor mu diye kontrol ediyoruz..

    // Sipariş Ver butonuna tıklanıyor mu tıklanmıyor mu? bakıyoruz:
    cy.get('button[type="submit"]').should("not.be.disabled");
  });
});

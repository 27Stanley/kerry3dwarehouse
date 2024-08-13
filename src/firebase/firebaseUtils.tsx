import { collection, getDocs, query, where, DocumentData, doc, updateDoc, serverTimestamp, deleteDoc } from "firebase/firestore";
import { firestore } from "./firebase";

export const fetchProducts = async (): Promise<DocumentData[]> => {
  try {
    const productsCollection = collection(firestore, "products");
    const productsSnapshot = await getDocs(productsCollection);
    const productsList = productsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    return productsList;
  } catch (error) {
    console.error("Error fetching products: ", error);
    return [];
  }
};

export const updateProduct = async (productId: string, updatedData: Record<string, any>): Promise<void> => {
  try {
    const productRef = doc(firestore, "products", productId);
    await updateDoc(productRef, {
      ...updatedData,
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error updating product: ", error);
  }
};


export const deleteProduct = async (productId: string): Promise<void> => {
    try {
      const productRef = doc(firestore, "products", productId);
      await deleteDoc(productRef);
    } catch (error) {
      console.error("Error deleting product: ", error);
    }
  };